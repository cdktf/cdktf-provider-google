# `networkServicesHttpRoute` Submodule <a name="`networkServicesHttpRoute` Submodule" id="@cdktf/provider-google.networkServicesHttpRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesHttpRoute <a name="NetworkServicesHttpRoute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route google_network_services_http_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRoute(scope: Construct, id: string, config: NetworkServicesHttpRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig">NetworkServicesHttpRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig">NetworkServicesHttpRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetGateways">resetGateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetMeshes">resetMeshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putRules"></a>

```typescript
public putRules(value: IResolvable | NetworkServicesHttpRouteRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesHttpRouteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGateways` <a name="resetGateways" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetGateways"></a>

```typescript
public resetGateways(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMeshes` <a name="resetMeshes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetMeshes"></a>

```typescript
public resetMeshes(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesHttpRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isConstruct"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

networkServicesHttpRoute.NetworkServicesHttpRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformElement"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformResource"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkServicesHttpRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesHttpRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesHttpRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesHttpRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList">NetworkServicesHttpRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference">NetworkServicesHttpRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.gatewaysInput">gatewaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.hostnamesInput">hostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.meshesInput">meshesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.gateways">gateways</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.hostnames">hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.meshes">meshes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.rules"></a>

```typescript
public readonly rules: NetworkServicesHttpRouteRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList">NetworkServicesHttpRouteRulesList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesHttpRouteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference">NetworkServicesHttpRouteTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gatewaysInput`<sup>Optional</sup> <a name="gatewaysInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.gatewaysInput"></a>

```typescript
public readonly gatewaysInput: string[];
```

- *Type:* string[]

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.hostnamesInput"></a>

```typescript
public readonly hostnamesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `meshesInput`<sup>Optional</sup> <a name="meshesInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.meshesInput"></a>

```typescript
public readonly meshesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | NetworkServicesHttpRouteRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesHttpRouteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.gateways"></a>

```typescript
public readonly gateways: string[];
```

- *Type:* string[]

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `meshes`<sup>Required</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.meshes"></a>

```typescript
public readonly meshes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesHttpRouteConfig <a name="NetworkServicesHttpRouteConfig" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteConfig: networkServicesHttpRoute.NetworkServicesHttpRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.hostnames">hostnames</a></code> | <code>string[]</code> | Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.name">name</a></code> | <code>string</code> | Name of the HttpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.gateways">gateways</a></code> | <code>string[]</code> | Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#id NetworkServicesHttpRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the HttpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.meshes">meshes</a></code> | <code>string[]</code> | Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#project NetworkServicesHttpRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#hostnames NetworkServicesHttpRoute#hostnames}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the HttpRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#name NetworkServicesHttpRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | NetworkServicesHttpRouteRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#rules NetworkServicesHttpRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#description NetworkServicesHttpRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.gateways"></a>

```typescript
public readonly gateways: string[];
```

- *Type:* string[]

Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#gateways NetworkServicesHttpRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#id NetworkServicesHttpRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the HttpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#labels NetworkServicesHttpRoute#labels}

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.meshes"></a>

```typescript
public readonly meshes: string[];
```

- *Type:* string[]

Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>.
The attached Mesh should be of a type SIDECAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#meshes NetworkServicesHttpRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#project NetworkServicesHttpRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesHttpRouteTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#timeouts NetworkServicesHttpRoute#timeouts}

---

### NetworkServicesHttpRouteRules <a name="NetworkServicesHttpRouteRules" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRules: networkServicesHttpRoute.NetworkServicesHttpRouteRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.property.matches">matches</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>[]</code> | matches block. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.property.action"></a>

```typescript
public readonly action: NetworkServicesHttpRouteRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#action NetworkServicesHttpRoute#action}

---

##### `matches`<sup>Optional</sup> <a name="matches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.property.matches"></a>

```typescript
public readonly matches: IResolvable | NetworkServicesHttpRouteRulesMatches[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>[]

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#matches NetworkServicesHttpRoute#matches}

---

### NetworkServicesHttpRouteRulesAction <a name="NetworkServicesHttpRouteRulesAction" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesAction: networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.corsPolicy">corsPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | cors_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.destinations">destinations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>[]</code> | destinations block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.faultInjectionPolicy">faultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | fault_injection_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.requestHeaderModifier">requestHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | request_header_modifier block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.requestMirrorPolicy">requestMirrorPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | request_mirror_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.responseHeaderModifier">responseHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | response_header_modifier block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.timeout">timeout</a></code> | <code>string</code> | Specifies the timeout for selected route. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.urlRewrite">urlRewrite</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | url_rewrite block. |

---

##### `corsPolicy`<sup>Optional</sup> <a name="corsPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.corsPolicy"></a>

```typescript
public readonly corsPolicy: NetworkServicesHttpRouteRulesActionCorsPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a>

cors_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#cors_policy NetworkServicesHttpRoute#cors_policy}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | NetworkServicesHttpRouteRulesActionDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>[]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#destinations NetworkServicesHttpRoute#destinations}

---

##### `faultInjectionPolicy`<sup>Optional</sup> <a name="faultInjectionPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.faultInjectionPolicy"></a>

```typescript
public readonly faultInjectionPolicy: NetworkServicesHttpRouteRulesActionFaultInjectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

fault_injection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#fault_injection_policy NetworkServicesHttpRoute#fault_injection_policy}

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.redirect"></a>

```typescript
public readonly redirect: NetworkServicesHttpRouteRulesActionRedirect;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#redirect NetworkServicesHttpRoute#redirect}

---

##### `requestHeaderModifier`<sup>Optional</sup> <a name="requestHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.requestHeaderModifier"></a>

```typescript
public readonly requestHeaderModifier: NetworkServicesHttpRouteRulesActionRequestHeaderModifier;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

request_header_modifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#request_header_modifier NetworkServicesHttpRoute#request_header_modifier}

---

##### `requestMirrorPolicy`<sup>Optional</sup> <a name="requestMirrorPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.requestMirrorPolicy"></a>

```typescript
public readonly requestMirrorPolicy: NetworkServicesHttpRouteRulesActionRequestMirrorPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

request_mirror_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#request_mirror_policy NetworkServicesHttpRoute#request_mirror_policy}

---

##### `responseHeaderModifier`<sup>Optional</sup> <a name="responseHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.responseHeaderModifier"></a>

```typescript
public readonly responseHeaderModifier: NetworkServicesHttpRouteRulesActionResponseHeaderModifier;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

response_header_modifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#response_header_modifier NetworkServicesHttpRoute#response_header_modifier}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: NetworkServicesHttpRouteRulesActionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#retry_policy NetworkServicesHttpRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Specifies the timeout for selected route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#timeout NetworkServicesHttpRoute#timeout}

---

##### `urlRewrite`<sup>Optional</sup> <a name="urlRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.urlRewrite"></a>

```typescript
public readonly urlRewrite: NetworkServicesHttpRouteRulesActionUrlRewrite;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#url_rewrite NetworkServicesHttpRoute#url_rewrite}

---

### NetworkServicesHttpRouteRulesActionCorsPolicy <a name="NetworkServicesHttpRouteRulesActionCorsPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesActionCorsPolicy: networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowCredentials">allowCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | In response to a preflight request, setting this to true indicates that the actual request can include user credentials. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowHeaders">allowHeaders</a></code> | <code>string[]</code> | Specifies the content for Access-Control-Allow-Headers header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowMethods">allowMethods</a></code> | <code>string[]</code> | Specifies the content for Access-Control-Allow-Methods header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOriginRegexes">allowOriginRegexes</a></code> | <code>string[]</code> | Specifies the regular expression patterns that match allowed origins. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOrigins">allowOrigins</a></code> | <code>string[]</code> | Specifies the list of origins that will be allowed to do CORS requests. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the CORS policy is disabled. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | Specifies the content for Access-Control-Expose-Headers header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.maxAge">maxAge</a></code> | <code>string</code> | Specifies how long result of a preflight request can be cached in seconds. |

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

In response to a preflight request, setting this to true indicates that the actual request can include user credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_credentials NetworkServicesHttpRoute#allow_credentials}

---

##### `allowHeaders`<sup>Optional</sup> <a name="allowHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowHeaders"></a>

```typescript
public readonly allowHeaders: string[];
```

- *Type:* string[]

Specifies the content for Access-Control-Allow-Headers header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_headers NetworkServicesHttpRoute#allow_headers}

---

##### `allowMethods`<sup>Optional</sup> <a name="allowMethods" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowMethods"></a>

```typescript
public readonly allowMethods: string[];
```

- *Type:* string[]

Specifies the content for Access-Control-Allow-Methods header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_methods NetworkServicesHttpRoute#allow_methods}

---

##### `allowOriginRegexes`<sup>Optional</sup> <a name="allowOriginRegexes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOriginRegexes"></a>

```typescript
public readonly allowOriginRegexes: string[];
```

- *Type:* string[]

Specifies the regular expression patterns that match allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_origin_regexes NetworkServicesHttpRoute#allow_origin_regexes}

---

##### `allowOrigins`<sup>Optional</sup> <a name="allowOrigins" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOrigins"></a>

```typescript
public readonly allowOrigins: string[];
```

- *Type:* string[]

Specifies the list of origins that will be allowed to do CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_origins NetworkServicesHttpRoute#allow_origins}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the CORS policy is disabled.

The default value is false, which indicates that the CORS policy is in effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#disabled NetworkServicesHttpRoute#disabled}

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

Specifies the content for Access-Control-Expose-Headers header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#expose_headers NetworkServicesHttpRoute#expose_headers}

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.maxAge"></a>

```typescript
public readonly maxAge: string;
```

- *Type:* string

Specifies how long result of a preflight request can be cached in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#max_age NetworkServicesHttpRoute#max_age}

---

### NetworkServicesHttpRouteRulesActionDestinations <a name="NetworkServicesHttpRouteRulesActionDestinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesActionDestinations: networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.property.serviceName">serviceName</a></code> | <code>string</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.property.weight">weight</a></code> | <code>number</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#service_name NetworkServicesHttpRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#weight NetworkServicesHttpRoute#weight}

---

### NetworkServicesHttpRouteRulesActionFaultInjectionPolicy <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesActionFaultInjectionPolicy: networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.abort">abort</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | abort block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.delay">delay</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | delay block. |

---

##### `abort`<sup>Optional</sup> <a name="abort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.abort"></a>

```typescript
public readonly abort: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

abort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#abort NetworkServicesHttpRoute#abort}

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.delay"></a>

```typescript
public readonly delay: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

delay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#delay NetworkServicesHttpRoute#delay}

---

### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesActionFaultInjectionPolicyAbort: networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus">httpStatus</a></code> | <code>number</code> | The HTTP status code used to abort the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.percentage">percentage</a></code> | <code>number</code> | The percentage of traffic which will be aborted. |

---

##### `httpStatus`<sup>Optional</sup> <a name="httpStatus" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus"></a>

```typescript
public readonly httpStatus: number;
```

- *Type:* number

The HTTP status code used to abort the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#http_status NetworkServicesHttpRoute#http_status}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

The percentage of traffic which will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#percentage NetworkServicesHttpRoute#percentage}

---

### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesActionFaultInjectionPolicyDelay: networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay">fixedDelay</a></code> | <code>string</code> | Specify a fixed delay before forwarding the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.percentage">percentage</a></code> | <code>number</code> | The percentage of traffic on which delay will be injected. |

---

##### `fixedDelay`<sup>Optional</sup> <a name="fixedDelay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay"></a>

```typescript
public readonly fixedDelay: string;
```

- *Type:* string

Specify a fixed delay before forwarding the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#fixed_delay NetworkServicesHttpRoute#fixed_delay}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

The percentage of traffic on which delay will be injected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#percentage NetworkServicesHttpRoute#percentage}

---

### NetworkServicesHttpRouteRulesActionRedirect <a name="NetworkServicesHttpRouteRulesActionRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesActionRedirect: networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.hostRedirect">hostRedirect</a></code> | <code>string</code> | The host that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.httpsRedirect">httpsRedirect</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the URL scheme in the redirected request is set to https. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.pathRedirect">pathRedirect</a></code> | <code>string</code> | The path that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.portRedirect">portRedirect</a></code> | <code>number</code> | The port that will be used in the redirected request instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.prefixRewrite">prefixRewrite</a></code> | <code>string</code> | Indicates that during redirection, the matched prefix (or path) should be swapped with this value. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.responseCode">responseCode</a></code> | <code>string</code> | The HTTP Status code to use for the redirect. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.stripQuery">stripQuery</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. |

---

##### `hostRedirect`<sup>Optional</sup> <a name="hostRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.hostRedirect"></a>

```typescript
public readonly hostRedirect: string;
```

- *Type:* string

The host that will be used in the redirect response instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#host_redirect NetworkServicesHttpRoute#host_redirect}

---

##### `httpsRedirect`<sup>Optional</sup> <a name="httpsRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.httpsRedirect"></a>

```typescript
public readonly httpsRedirect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the URL scheme in the redirected request is set to https.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#https_redirect NetworkServicesHttpRoute#https_redirect}

---

##### `pathRedirect`<sup>Optional</sup> <a name="pathRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.pathRedirect"></a>

```typescript
public readonly pathRedirect: string;
```

- *Type:* string

The path that will be used in the redirect response instead of the one that was supplied in the request.

pathRedirect can not be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#path_redirect NetworkServicesHttpRoute#path_redirect}

---

##### `portRedirect`<sup>Optional</sup> <a name="portRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.portRedirect"></a>

```typescript
public readonly portRedirect: number;
```

- *Type:* number

The port that will be used in the redirected request instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#port_redirect NetworkServicesHttpRoute#port_redirect}

---

##### `prefixRewrite`<sup>Optional</sup> <a name="prefixRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.prefixRewrite"></a>

```typescript
public readonly prefixRewrite: string;
```

- *Type:* string

Indicates that during redirection, the matched prefix (or path) should be swapped with this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#prefix_rewrite NetworkServicesHttpRoute#prefix_rewrite}

---

##### `responseCode`<sup>Optional</sup> <a name="responseCode" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.responseCode"></a>

```typescript
public readonly responseCode: string;
```

- *Type:* string

The HTTP Status code to use for the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#response_code NetworkServicesHttpRoute#response_code}

---

##### `stripQuery`<sup>Optional</sup> <a name="stripQuery" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.stripQuery"></a>

```typescript
public readonly stripQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#strip_query NetworkServicesHttpRoute#strip_query}

---

### NetworkServicesHttpRouteRulesActionRequestHeaderModifier <a name="NetworkServicesHttpRouteRulesActionRequestHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesActionRequestHeaderModifier: networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | Add the headers with given map where key is the name of the header, value is the value of the header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.remove">remove</a></code> | <code>string[]</code> | Remove headers (matching by header names) specified in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Add the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#add NetworkServicesHttpRoute#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

Remove headers (matching by header names) specified in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#remove NetworkServicesHttpRoute#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#set NetworkServicesHttpRoute#set}

---

### NetworkServicesHttpRouteRulesActionRequestMirrorPolicy <a name="NetworkServicesHttpRouteRulesActionRequestMirrorPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesActionRequestMirrorPolicy: networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | destination block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy.property.destination"></a>

```typescript
public readonly destination: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#destination NetworkServicesHttpRoute#destination}

---

### NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination <a name="NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesActionRequestMirrorPolicyDestination: networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.serviceName">serviceName</a></code> | <code>string</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.weight">weight</a></code> | <code>number</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#service_name NetworkServicesHttpRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#weight NetworkServicesHttpRoute#weight}

---

### NetworkServicesHttpRouteRulesActionResponseHeaderModifier <a name="NetworkServicesHttpRouteRulesActionResponseHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesActionResponseHeaderModifier: networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | Add the headers with given map where key is the name of the header, value is the value of the header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.remove">remove</a></code> | <code>string[]</code> | Remove headers (matching by header names) specified in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Add the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#add NetworkServicesHttpRoute#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

Remove headers (matching by header names) specified in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#remove NetworkServicesHttpRoute#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#set NetworkServicesHttpRoute#set}

---

### NetworkServicesHttpRouteRulesActionRetryPolicy <a name="NetworkServicesHttpRouteRulesActionRetryPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesActionRetryPolicy: networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.numRetries">numRetries</a></code> | <code>number</code> | Specifies the allowed number of retries. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.perTryTimeout">perTryTimeout</a></code> | <code>string</code> | Specifies a non-zero timeout per retry attempt. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.retryConditions">retryConditions</a></code> | <code>string[]</code> | Specifies one or more conditions when this retry policy applies. |

---

##### `numRetries`<sup>Optional</sup> <a name="numRetries" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.numRetries"></a>

```typescript
public readonly numRetries: number;
```

- *Type:* number

Specifies the allowed number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#num_retries NetworkServicesHttpRoute#num_retries}

---

##### `perTryTimeout`<sup>Optional</sup> <a name="perTryTimeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.perTryTimeout"></a>

```typescript
public readonly perTryTimeout: string;
```

- *Type:* string

Specifies a non-zero timeout per retry attempt.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#per_try_timeout NetworkServicesHttpRoute#per_try_timeout}

---

##### `retryConditions`<sup>Optional</sup> <a name="retryConditions" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.retryConditions"></a>

```typescript
public readonly retryConditions: string[];
```

- *Type:* string[]

Specifies one or more conditions when this retry policy applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#retry_conditions NetworkServicesHttpRoute#retry_conditions}

---

### NetworkServicesHttpRouteRulesActionUrlRewrite <a name="NetworkServicesHttpRouteRulesActionUrlRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesActionUrlRewrite: networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.property.hostRewrite">hostRewrite</a></code> | <code>string</code> | Prior to forwarding the request to the selected destination, the requests host header is replaced by this value. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.property.pathPrefixRewrite">pathPrefixRewrite</a></code> | <code>string</code> | Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value. |

---

##### `hostRewrite`<sup>Optional</sup> <a name="hostRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.property.hostRewrite"></a>

```typescript
public readonly hostRewrite: string;
```

- *Type:* string

Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#host_rewrite NetworkServicesHttpRoute#host_rewrite}

---

##### `pathPrefixRewrite`<sup>Optional</sup> <a name="pathPrefixRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.property.pathPrefixRewrite"></a>

```typescript
public readonly pathPrefixRewrite: string;
```

- *Type:* string

Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#path_prefix_rewrite NetworkServicesHttpRoute#path_prefix_rewrite}

---

### NetworkServicesHttpRouteRulesMatches <a name="NetworkServicesHttpRouteRulesMatches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesMatches: networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.fullPathMatch">fullPathMatch</a></code> | <code>string</code> | The HTTP request path value should exactly match this value. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>[]</code> | headers block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.prefixMatch">prefixMatch</a></code> | <code>string</code> | The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.queryParameters">queryParameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>[]</code> | query_parameters block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.regexMatch">regexMatch</a></code> | <code>string</code> | The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL. |

---

##### `fullPathMatch`<sup>Optional</sup> <a name="fullPathMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.fullPathMatch"></a>

```typescript
public readonly fullPathMatch: string;
```

- *Type:* string

The HTTP request path value should exactly match this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#full_path_match NetworkServicesHttpRoute#full_path_match}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.headers"></a>

```typescript
public readonly headers: IResolvable | NetworkServicesHttpRouteRulesMatchesHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#headers NetworkServicesHttpRoute#headers}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#ignore_case NetworkServicesHttpRoute#ignore_case}

---

##### `prefixMatch`<sup>Optional</sup> <a name="prefixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string;
```

- *Type:* string

The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#prefix_match NetworkServicesHttpRoute#prefix_match}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.queryParameters"></a>

```typescript
public readonly queryParameters: IResolvable | NetworkServicesHttpRouteRulesMatchesQueryParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>[]

query_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#query_parameters NetworkServicesHttpRoute#query_parameters}

---

##### `regexMatch`<sup>Optional</sup> <a name="regexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.regexMatch"></a>

```typescript
public readonly regexMatch: string;
```

- *Type:* string

The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL.

For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#regex_match NetworkServicesHttpRoute#regex_match}

---

### NetworkServicesHttpRouteRulesMatchesHeaders <a name="NetworkServicesHttpRouteRulesMatchesHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesMatchesHeaders: networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.exactMatch">exactMatch</a></code> | <code>string</code> | The value of the header should match exactly the content of exactMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.header">header</a></code> | <code>string</code> | The name of the HTTP header to match against. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.invertMatch">invertMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | If specified, the match result will be inverted before checking. Default value is set to false. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.prefixMatch">prefixMatch</a></code> | <code>string</code> | The value of the header must start with the contents of prefixMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.presentMatch">presentMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | A header with headerName must exist. The match takes place whether or not the header has a value. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.rangeMatch">rangeMatch</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | range_match block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.regexMatch">regexMatch</a></code> | <code>string</code> | The value of the header must match the regular expression specified in regexMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.suffixMatch">suffixMatch</a></code> | <code>string</code> | The value of the header must end with the contents of suffixMatch. |

---

##### `exactMatch`<sup>Optional</sup> <a name="exactMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.exactMatch"></a>

```typescript
public readonly exactMatch: string;
```

- *Type:* string

The value of the header should match exactly the content of exactMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#exact_match NetworkServicesHttpRoute#exact_match}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

The name of the HTTP header to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#header NetworkServicesHttpRoute#header}

---

##### `invertMatch`<sup>Optional</sup> <a name="invertMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.invertMatch"></a>

```typescript
public readonly invertMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If specified, the match result will be inverted before checking. Default value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#invert_match NetworkServicesHttpRoute#invert_match}

---

##### `prefixMatch`<sup>Optional</sup> <a name="prefixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string;
```

- *Type:* string

The value of the header must start with the contents of prefixMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#prefix_match NetworkServicesHttpRoute#prefix_match}

---

##### `presentMatch`<sup>Optional</sup> <a name="presentMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.presentMatch"></a>

```typescript
public readonly presentMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A header with headerName must exist. The match takes place whether or not the header has a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#present_match NetworkServicesHttpRoute#present_match}

---

##### `rangeMatch`<sup>Optional</sup> <a name="rangeMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.rangeMatch"></a>

```typescript
public readonly rangeMatch: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

range_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#range_match NetworkServicesHttpRoute#range_match}

---

##### `regexMatch`<sup>Optional</sup> <a name="regexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.regexMatch"></a>

```typescript
public readonly regexMatch: string;
```

- *Type:* string

The value of the header must match the regular expression specified in regexMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#regex_match NetworkServicesHttpRoute#regex_match}

---

##### `suffixMatch`<sup>Optional</sup> <a name="suffixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.suffixMatch"></a>

```typescript
public readonly suffixMatch: string;
```

- *Type:* string

The value of the header must end with the contents of suffixMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#suffix_match NetworkServicesHttpRoute#suffix_match}

---

### NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch <a name="NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesMatchesHeadersRangeMatch: networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.end">end</a></code> | <code>number</code> | End of the range (exclusive). |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.start">start</a></code> | <code>number</code> | Start of the range (inclusive). |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

End of the range (exclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#end NetworkServicesHttpRoute#end}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

Start of the range (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#start NetworkServicesHttpRoute#start}

---

### NetworkServicesHttpRouteRulesMatchesQueryParameters <a name="NetworkServicesHttpRouteRulesMatchesQueryParameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteRulesMatchesQueryParameters: networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.exactMatch">exactMatch</a></code> | <code>string</code> | The value of the query parameter must exactly match the contents of exactMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.presentMatch">presentMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.queryParameter">queryParameter</a></code> | <code>string</code> | The name of the query parameter to match. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.regexMatch">regexMatch</a></code> | <code>string</code> | The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax. |

---

##### `exactMatch`<sup>Optional</sup> <a name="exactMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.exactMatch"></a>

```typescript
public readonly exactMatch: string;
```

- *Type:* string

The value of the query parameter must exactly match the contents of exactMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#exact_match NetworkServicesHttpRoute#exact_match}

---

##### `presentMatch`<sup>Optional</sup> <a name="presentMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.presentMatch"></a>

```typescript
public readonly presentMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#present_match NetworkServicesHttpRoute#present_match}

---

##### `queryParameter`<sup>Optional</sup> <a name="queryParameter" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.queryParameter"></a>

```typescript
public readonly queryParameter: string;
```

- *Type:* string

The name of the query parameter to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#query_parameter NetworkServicesHttpRoute#query_parameter}

---

##### `regexMatch`<sup>Optional</sup> <a name="regexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.regexMatch"></a>

```typescript
public readonly regexMatch: string;
```

- *Type:* string

The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#regex_match NetworkServicesHttpRoute#regex_match}

---

### NetworkServicesHttpRouteTimeouts <a name="NetworkServicesHttpRouteTimeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

const networkServicesHttpRouteTimeouts: networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#create NetworkServicesHttpRoute#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#delete NetworkServicesHttpRoute#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#update NetworkServicesHttpRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#create NetworkServicesHttpRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#delete NetworkServicesHttpRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#update NetworkServicesHttpRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference <a name="NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowHeaders">resetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowMethods">resetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOriginRegexes">resetAllowOriginRegexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOrigins">resetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowCredentials"></a>

```typescript
public resetAllowCredentials(): void
```

##### `resetAllowHeaders` <a name="resetAllowHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowHeaders"></a>

```typescript
public resetAllowHeaders(): void
```

##### `resetAllowMethods` <a name="resetAllowMethods" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowMethods"></a>

```typescript
public resetAllowMethods(): void
```

##### `resetAllowOriginRegexes` <a name="resetAllowOriginRegexes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOriginRegexes"></a>

```typescript
public resetAllowOriginRegexes(): void
```

##### `resetAllowOrigins` <a name="resetAllowOrigins" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOrigins"></a>

```typescript
public resetAllowOrigins(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetExposeHeaders"></a>

```typescript
public resetExposeHeaders(): void
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetMaxAge"></a>

```typescript
public resetMaxAge(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeadersInput">allowHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethodsInput">allowMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexesInput">allowOriginRegexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginsInput">allowOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeaders">allowHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethods">allowMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexes">allowOriginRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOrigins">allowOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAge">maxAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentialsInput"></a>

```typescript
public readonly allowCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowHeadersInput`<sup>Optional</sup> <a name="allowHeadersInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeadersInput"></a>

```typescript
public readonly allowHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowMethodsInput`<sup>Optional</sup> <a name="allowMethodsInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethodsInput"></a>

```typescript
public readonly allowMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowOriginRegexesInput`<sup>Optional</sup> <a name="allowOriginRegexesInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexesInput"></a>

```typescript
public readonly allowOriginRegexesInput: string[];
```

- *Type:* string[]

---

##### `allowOriginsInput`<sup>Optional</sup> <a name="allowOriginsInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginsInput"></a>

```typescript
public readonly allowOriginsInput: string[];
```

- *Type:* string[]

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeadersInput"></a>

```typescript
public readonly exposeHeadersInput: string[];
```

- *Type:* string[]

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAgeInput"></a>

```typescript
public readonly maxAgeInput: string;
```

- *Type:* string

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowHeaders`<sup>Required</sup> <a name="allowHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeaders"></a>

```typescript
public readonly allowHeaders: string[];
```

- *Type:* string[]

---

##### `allowMethods`<sup>Required</sup> <a name="allowMethods" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethods"></a>

```typescript
public readonly allowMethods: string[];
```

- *Type:* string[]

---

##### `allowOriginRegexes`<sup>Required</sup> <a name="allowOriginRegexes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexes"></a>

```typescript
public readonly allowOriginRegexes: string[];
```

- *Type:* string[]

---

##### `allowOrigins`<sup>Required</sup> <a name="allowOrigins" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOrigins"></a>

```typescript
public readonly allowOrigins: string[];
```

- *Type:* string[]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAge"></a>

```typescript
public readonly maxAge: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesHttpRouteRulesActionCorsPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a>

---


### NetworkServicesHttpRouteRulesActionDestinationsList <a name="NetworkServicesHttpRouteRulesActionDestinationsList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.get"></a>

```typescript
public get(index: number): NetworkServicesHttpRouteRulesActionDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesHttpRouteRulesActionDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>[]

---


### NetworkServicesHttpRouteRulesActionDestinationsOutputReference <a name="NetworkServicesHttpRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesHttpRouteRulesActionDestinations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>

---


### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus">resetHttpStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpStatus` <a name="resetHttpStatus" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus"></a>

```typescript
public resetHttpStatus(): void
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput">httpStatusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus">httpStatus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpStatusInput`<sup>Optional</sup> <a name="httpStatusInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput"></a>

```typescript
public readonly httpStatusInput: number;
```

- *Type:* number

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `httpStatus`<sup>Required</sup> <a name="httpStatus" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus"></a>

```typescript
public readonly httpStatus: number;
```

- *Type:* number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

---


### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay">resetFixedDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixedDelay` <a name="resetFixedDelay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay"></a>

```typescript
public resetFixedDelay(): void
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput">fixedDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay">fixedDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedDelayInput`<sup>Optional</sup> <a name="fixedDelayInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput"></a>

```typescript
public readonly fixedDelayInput: string;
```

- *Type:* string

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `fixedDelay`<sup>Required</sup> <a name="fixedDelay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay"></a>

```typescript
public readonly fixedDelay: string;
```

- *Type:* string

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

---


### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort">putAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay">putDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort">resetAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay">resetDelay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbort` <a name="putAbort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort"></a>

```typescript
public putAbort(value: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `putDelay` <a name="putDelay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay"></a>

```typescript
public putDelay(value: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `resetAbort` <a name="resetAbort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort"></a>

```typescript
public resetAbort(): void
```

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay"></a>

```typescript
public resetDelay(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abort">abort</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delay">delay</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput">abortInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput">delayInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `abort`<sup>Required</sup> <a name="abort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abort"></a>

```typescript
public readonly abort: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference</a>

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delay"></a>

```typescript
public readonly delay: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference</a>

---

##### `abortInput`<sup>Optional</sup> <a name="abortInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput"></a>

```typescript
public readonly abortInput: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput"></a>

```typescript
public readonly delayInput: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesHttpRouteRulesActionFaultInjectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

---


### NetworkServicesHttpRouteRulesActionOutputReference <a name="NetworkServicesHttpRouteRulesActionOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy">putCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy">putFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect">putRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier">putRequestHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy">putRequestMirrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier">putResponseHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite">putUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetCorsPolicy">resetCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetFaultInjectionPolicy">resetFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRedirect">resetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRequestHeaderModifier">resetRequestHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRequestMirrorPolicy">resetRequestMirrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetResponseHeaderModifier">resetResponseHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetUrlRewrite">resetUrlRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCorsPolicy` <a name="putCorsPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy"></a>

```typescript
public putCorsPolicy(value: NetworkServicesHttpRouteRulesActionCorsPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a>

---

##### `putDestinations` <a name="putDestinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | NetworkServicesHttpRouteRulesActionDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>[]

---

##### `putFaultInjectionPolicy` <a name="putFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy"></a>

```typescript
public putFaultInjectionPolicy(value: NetworkServicesHttpRouteRulesActionFaultInjectionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

---

##### `putRedirect` <a name="putRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect"></a>

```typescript
public putRedirect(value: NetworkServicesHttpRouteRulesActionRedirect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a>

---

##### `putRequestHeaderModifier` <a name="putRequestHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier"></a>

```typescript
public putRequestHeaderModifier(value: NetworkServicesHttpRouteRulesActionRequestHeaderModifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

---

##### `putRequestMirrorPolicy` <a name="putRequestMirrorPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy"></a>

```typescript
public putRequestMirrorPolicy(value: NetworkServicesHttpRouteRulesActionRequestMirrorPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

---

##### `putResponseHeaderModifier` <a name="putResponseHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier"></a>

```typescript
public putResponseHeaderModifier(value: NetworkServicesHttpRouteRulesActionResponseHeaderModifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy"></a>

```typescript
public putRetryPolicy(value: NetworkServicesHttpRouteRulesActionRetryPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a>

---

##### `putUrlRewrite` <a name="putUrlRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite"></a>

```typescript
public putUrlRewrite(value: NetworkServicesHttpRouteRulesActionUrlRewrite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a>

---

##### `resetCorsPolicy` <a name="resetCorsPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetCorsPolicy"></a>

```typescript
public resetCorsPolicy(): void
```

##### `resetDestinations` <a name="resetDestinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetFaultInjectionPolicy` <a name="resetFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetFaultInjectionPolicy"></a>

```typescript
public resetFaultInjectionPolicy(): void
```

##### `resetRedirect` <a name="resetRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRedirect"></a>

```typescript
public resetRedirect(): void
```

##### `resetRequestHeaderModifier` <a name="resetRequestHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRequestHeaderModifier"></a>

```typescript
public resetRequestHeaderModifier(): void
```

##### `resetRequestMirrorPolicy` <a name="resetRequestMirrorPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRequestMirrorPolicy"></a>

```typescript
public resetRequestMirrorPolicy(): void
```

##### `resetResponseHeaderModifier` <a name="resetResponseHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetResponseHeaderModifier"></a>

```typescript
public resetResponseHeaderModifier(): void
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRetryPolicy"></a>

```typescript
public resetRetryPolicy(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetUrlRewrite` <a name="resetUrlRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetUrlRewrite"></a>

```typescript
public resetUrlRewrite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicy">corsPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference">NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList">NetworkServicesHttpRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicy">faultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference">NetworkServicesHttpRouteRulesActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifier">requestHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference">NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicy">requestMirrorPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifier">responseHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference">NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference">NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.urlRewrite">urlRewrite</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference">NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicyInput">corsPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicyInput">faultInjectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.redirectInput">redirectInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifierInput">requestHeaderModifierInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicyInput">requestMirrorPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifierInput">responseHeaderModifierInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.urlRewriteInput">urlRewriteInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `corsPolicy`<sup>Required</sup> <a name="corsPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicy"></a>

```typescript
public readonly corsPolicy: NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference">NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference</a>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.destinations"></a>

```typescript
public readonly destinations: NetworkServicesHttpRouteRulesActionDestinationsList;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList">NetworkServicesHttpRouteRulesActionDestinationsList</a>

---

##### `faultInjectionPolicy`<sup>Required</sup> <a name="faultInjectionPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicy"></a>

```typescript
public readonly faultInjectionPolicy: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.redirect"></a>

```typescript
public readonly redirect: NetworkServicesHttpRouteRulesActionRedirectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference">NetworkServicesHttpRouteRulesActionRedirectOutputReference</a>

---

##### `requestHeaderModifier`<sup>Required</sup> <a name="requestHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifier"></a>

```typescript
public readonly requestHeaderModifier: NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference">NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference</a>

---

##### `requestMirrorPolicy`<sup>Required</sup> <a name="requestMirrorPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicy"></a>

```typescript
public readonly requestMirrorPolicy: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference</a>

---

##### `responseHeaderModifier`<sup>Required</sup> <a name="responseHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifier"></a>

```typescript
public readonly responseHeaderModifier: NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference">NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference">NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference</a>

---

##### `urlRewrite`<sup>Required</sup> <a name="urlRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.urlRewrite"></a>

```typescript
public readonly urlRewrite: NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference">NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference</a>

---

##### `corsPolicyInput`<sup>Optional</sup> <a name="corsPolicyInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicyInput"></a>

```typescript
public readonly corsPolicyInput: NetworkServicesHttpRouteRulesActionCorsPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | NetworkServicesHttpRouteRulesActionDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>[]

---

##### `faultInjectionPolicyInput`<sup>Optional</sup> <a name="faultInjectionPolicyInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicyInput"></a>

```typescript
public readonly faultInjectionPolicyInput: NetworkServicesHttpRouteRulesActionFaultInjectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

---

##### `redirectInput`<sup>Optional</sup> <a name="redirectInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.redirectInput"></a>

```typescript
public readonly redirectInput: NetworkServicesHttpRouteRulesActionRedirect;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a>

---

##### `requestHeaderModifierInput`<sup>Optional</sup> <a name="requestHeaderModifierInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifierInput"></a>

```typescript
public readonly requestHeaderModifierInput: NetworkServicesHttpRouteRulesActionRequestHeaderModifier;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

---

##### `requestMirrorPolicyInput`<sup>Optional</sup> <a name="requestMirrorPolicyInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicyInput"></a>

```typescript
public readonly requestMirrorPolicyInput: NetworkServicesHttpRouteRulesActionRequestMirrorPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

---

##### `responseHeaderModifierInput`<sup>Optional</sup> <a name="responseHeaderModifierInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifierInput"></a>

```typescript
public readonly responseHeaderModifierInput: NetworkServicesHttpRouteRulesActionResponseHeaderModifier;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicyInput"></a>

```typescript
public readonly retryPolicyInput: NetworkServicesHttpRouteRulesActionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `urlRewriteInput`<sup>Optional</sup> <a name="urlRewriteInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.urlRewriteInput"></a>

```typescript
public readonly urlRewriteInput: NetworkServicesHttpRouteRulesActionUrlRewrite;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesHttpRouteRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a>

---


### NetworkServicesHttpRouteRulesActionRedirectOutputReference <a name="NetworkServicesHttpRouteRulesActionRedirectOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHostRedirect">resetHostRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHttpsRedirect">resetHttpsRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPathRedirect">resetPathRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPortRedirect">resetPortRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPrefixRewrite">resetPrefixRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetResponseCode">resetResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetStripQuery">resetStripQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostRedirect` <a name="resetHostRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHostRedirect"></a>

```typescript
public resetHostRedirect(): void
```

##### `resetHttpsRedirect` <a name="resetHttpsRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHttpsRedirect"></a>

```typescript
public resetHttpsRedirect(): void
```

##### `resetPathRedirect` <a name="resetPathRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPathRedirect"></a>

```typescript
public resetPathRedirect(): void
```

##### `resetPortRedirect` <a name="resetPortRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPortRedirect"></a>

```typescript
public resetPortRedirect(): void
```

##### `resetPrefixRewrite` <a name="resetPrefixRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPrefixRewrite"></a>

```typescript
public resetPrefixRewrite(): void
```

##### `resetResponseCode` <a name="resetResponseCode" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetResponseCode"></a>

```typescript
public resetResponseCode(): void
```

##### `resetStripQuery` <a name="resetStripQuery" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetStripQuery"></a>

```typescript
public resetStripQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirectInput">hostRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirectInput">httpsRedirectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirectInput">pathRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirectInput">portRedirectInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewriteInput">prefixRewriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCodeInput">responseCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQueryInput">stripQueryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirect">hostRedirect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirect">httpsRedirect</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirect">pathRedirect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirect">portRedirect</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewrite">prefixRewrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCode">responseCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQuery">stripQuery</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostRedirectInput`<sup>Optional</sup> <a name="hostRedirectInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirectInput"></a>

```typescript
public readonly hostRedirectInput: string;
```

- *Type:* string

---

##### `httpsRedirectInput`<sup>Optional</sup> <a name="httpsRedirectInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirectInput"></a>

```typescript
public readonly httpsRedirectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathRedirectInput`<sup>Optional</sup> <a name="pathRedirectInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirectInput"></a>

```typescript
public readonly pathRedirectInput: string;
```

- *Type:* string

---

##### `portRedirectInput`<sup>Optional</sup> <a name="portRedirectInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirectInput"></a>

```typescript
public readonly portRedirectInput: number;
```

- *Type:* number

---

##### `prefixRewriteInput`<sup>Optional</sup> <a name="prefixRewriteInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewriteInput"></a>

```typescript
public readonly prefixRewriteInput: string;
```

- *Type:* string

---

##### `responseCodeInput`<sup>Optional</sup> <a name="responseCodeInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCodeInput"></a>

```typescript
public readonly responseCodeInput: string;
```

- *Type:* string

---

##### `stripQueryInput`<sup>Optional</sup> <a name="stripQueryInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQueryInput"></a>

```typescript
public readonly stripQueryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostRedirect`<sup>Required</sup> <a name="hostRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirect"></a>

```typescript
public readonly hostRedirect: string;
```

- *Type:* string

---

##### `httpsRedirect`<sup>Required</sup> <a name="httpsRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirect"></a>

```typescript
public readonly httpsRedirect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathRedirect`<sup>Required</sup> <a name="pathRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirect"></a>

```typescript
public readonly pathRedirect: string;
```

- *Type:* string

---

##### `portRedirect`<sup>Required</sup> <a name="portRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirect"></a>

```typescript
public readonly portRedirect: number;
```

- *Type:* number

---

##### `prefixRewrite`<sup>Required</sup> <a name="prefixRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewrite"></a>

```typescript
public readonly prefixRewrite: string;
```

- *Type:* string

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCode"></a>

```typescript
public readonly responseCode: string;
```

- *Type:* string

---

##### `stripQuery`<sup>Required</sup> <a name="stripQuery" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQuery"></a>

```typescript
public readonly stripQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesHttpRouteRulesActionRedirect;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a>

---


### NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference <a name="NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetAdd"></a>

```typescript
public resetAdd(): void
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetRemove"></a>

```typescript
public resetRemove(): void
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetSet"></a>

```typescript
public resetSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.addInput">addInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.removeInput">removeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.setInput">setInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.remove">remove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.addInput"></a>

```typescript
public readonly addInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.removeInput"></a>

```typescript
public readonly removeInput: string[];
```

- *Type:* string[]

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.setInput"></a>

```typescript
public readonly setInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesHttpRouteRulesActionRequestHeaderModifier;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

---


### NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference <a name="NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

---


### NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference <a name="NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resetDestination">resetDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination"></a>

```typescript
public putDestination(value: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destination"></a>

```typescript
public readonly destination: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesHttpRouteRulesActionRequestMirrorPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

---


### NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference <a name="NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetAdd"></a>

```typescript
public resetAdd(): void
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetRemove"></a>

```typescript
public resetRemove(): void
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetSet"></a>

```typescript
public resetSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.addInput">addInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.removeInput">removeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.setInput">setInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.add">add</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.remove">remove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.set">set</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.addInput"></a>

```typescript
public readonly addInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.removeInput"></a>

```typescript
public readonly removeInput: string[];
```

- *Type:* string[]

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.setInput"></a>

```typescript
public readonly setInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.add"></a>

```typescript
public readonly add: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.remove"></a>

```typescript
public readonly remove: string[];
```

- *Type:* string[]

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.set"></a>

```typescript
public readonly set: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesHttpRouteRulesActionResponseHeaderModifier;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

---


### NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference <a name="NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetNumRetries">resetNumRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetPerTryTimeout">resetPerTryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetRetryConditions">resetRetryConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumRetries` <a name="resetNumRetries" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetNumRetries"></a>

```typescript
public resetNumRetries(): void
```

##### `resetPerTryTimeout` <a name="resetPerTryTimeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetPerTryTimeout"></a>

```typescript
public resetPerTryTimeout(): void
```

##### `resetRetryConditions` <a name="resetRetryConditions" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetRetryConditions"></a>

```typescript
public resetRetryConditions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput">numRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeoutInput">perTryTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput">retryConditionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetries">numRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeout">perTryTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditions">retryConditions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numRetriesInput`<sup>Optional</sup> <a name="numRetriesInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput"></a>

```typescript
public readonly numRetriesInput: number;
```

- *Type:* number

---

##### `perTryTimeoutInput`<sup>Optional</sup> <a name="perTryTimeoutInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeoutInput"></a>

```typescript
public readonly perTryTimeoutInput: string;
```

- *Type:* string

---

##### `retryConditionsInput`<sup>Optional</sup> <a name="retryConditionsInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput"></a>

```typescript
public readonly retryConditionsInput: string[];
```

- *Type:* string[]

---

##### `numRetries`<sup>Required</sup> <a name="numRetries" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetries"></a>

```typescript
public readonly numRetries: number;
```

- *Type:* number

---

##### `perTryTimeout`<sup>Required</sup> <a name="perTryTimeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeout"></a>

```typescript
public readonly perTryTimeout: string;
```

- *Type:* string

---

##### `retryConditions`<sup>Required</sup> <a name="retryConditions" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditions"></a>

```typescript
public readonly retryConditions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesHttpRouteRulesActionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a>

---


### NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference <a name="NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetHostRewrite">resetHostRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetPathPrefixRewrite">resetPathPrefixRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostRewrite` <a name="resetHostRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetHostRewrite"></a>

```typescript
public resetHostRewrite(): void
```

##### `resetPathPrefixRewrite` <a name="resetPathPrefixRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetPathPrefixRewrite"></a>

```typescript
public resetPathPrefixRewrite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewriteInput">hostRewriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewriteInput">pathPrefixRewriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewrite">hostRewrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewrite">pathPrefixRewrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostRewriteInput`<sup>Optional</sup> <a name="hostRewriteInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewriteInput"></a>

```typescript
public readonly hostRewriteInput: string;
```

- *Type:* string

---

##### `pathPrefixRewriteInput`<sup>Optional</sup> <a name="pathPrefixRewriteInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewriteInput"></a>

```typescript
public readonly pathPrefixRewriteInput: string;
```

- *Type:* string

---

##### `hostRewrite`<sup>Required</sup> <a name="hostRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewrite"></a>

```typescript
public readonly hostRewrite: string;
```

- *Type:* string

---

##### `pathPrefixRewrite`<sup>Required</sup> <a name="pathPrefixRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewrite"></a>

```typescript
public readonly pathPrefixRewrite: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesHttpRouteRulesActionUrlRewrite;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a>

---


### NetworkServicesHttpRouteRulesList <a name="NetworkServicesHttpRouteRulesList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.get"></a>

```typescript
public get(index: number): NetworkServicesHttpRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesHttpRouteRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>[]

---


### NetworkServicesHttpRouteRulesMatchesHeadersList <a name="NetworkServicesHttpRouteRulesMatchesHeadersList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.get"></a>

```typescript
public get(index: number): NetworkServicesHttpRouteRulesMatchesHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesHttpRouteRulesMatchesHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>[]

---


### NetworkServicesHttpRouteRulesMatchesHeadersOutputReference <a name="NetworkServicesHttpRouteRulesMatchesHeadersOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch">putRangeMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetExactMatch">resetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetInvertMatch">resetInvertMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPrefixMatch">resetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPresentMatch">resetPresentMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRangeMatch">resetRangeMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRegexMatch">resetRegexMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetSuffixMatch">resetSuffixMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRangeMatch` <a name="putRangeMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch"></a>

```typescript
public putRangeMatch(value: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

---

##### `resetExactMatch` <a name="resetExactMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetExactMatch"></a>

```typescript
public resetExactMatch(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetInvertMatch` <a name="resetInvertMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetInvertMatch"></a>

```typescript
public resetInvertMatch(): void
```

##### `resetPrefixMatch` <a name="resetPrefixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPrefixMatch"></a>

```typescript
public resetPrefixMatch(): void
```

##### `resetPresentMatch` <a name="resetPresentMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPresentMatch"></a>

```typescript
public resetPresentMatch(): void
```

##### `resetRangeMatch` <a name="resetRangeMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRangeMatch"></a>

```typescript
public resetRangeMatch(): void
```

##### `resetRegexMatch` <a name="resetRegexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRegexMatch"></a>

```typescript
public resetRegexMatch(): void
```

##### `resetSuffixMatch` <a name="resetSuffixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetSuffixMatch"></a>

```typescript
public resetSuffixMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatch">rangeMatch</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatchInput">exactMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.headerInput">headerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatchInput">invertMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatchInput">prefixMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatchInput">presentMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatchInput">rangeMatchInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatchInput">regexMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatchInput">suffixMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatch">exactMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatch">invertMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatch">prefixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatch">presentMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatch">regexMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatch">suffixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rangeMatch`<sup>Required</sup> <a name="rangeMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatch"></a>

```typescript
public readonly rangeMatch: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference</a>

---

##### `exactMatchInput`<sup>Optional</sup> <a name="exactMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatchInput"></a>

```typescript
public readonly exactMatchInput: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string;
```

- *Type:* string

---

##### `invertMatchInput`<sup>Optional</sup> <a name="invertMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatchInput"></a>

```typescript
public readonly invertMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefixMatchInput`<sup>Optional</sup> <a name="prefixMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatchInput"></a>

```typescript
public readonly prefixMatchInput: string;
```

- *Type:* string

---

##### `presentMatchInput`<sup>Optional</sup> <a name="presentMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatchInput"></a>

```typescript
public readonly presentMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rangeMatchInput`<sup>Optional</sup> <a name="rangeMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatchInput"></a>

```typescript
public readonly rangeMatchInput: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

---

##### `regexMatchInput`<sup>Optional</sup> <a name="regexMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatchInput"></a>

```typescript
public readonly regexMatchInput: string;
```

- *Type:* string

---

##### `suffixMatchInput`<sup>Optional</sup> <a name="suffixMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatchInput"></a>

```typescript
public readonly suffixMatchInput: string;
```

- *Type:* string

---

##### `exactMatch`<sup>Required</sup> <a name="exactMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatch"></a>

```typescript
public readonly exactMatch: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `invertMatch`<sup>Required</sup> <a name="invertMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatch"></a>

```typescript
public readonly invertMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string;
```

- *Type:* string

---

##### `presentMatch`<sup>Required</sup> <a name="presentMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatch"></a>

```typescript
public readonly presentMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regexMatch`<sup>Required</sup> <a name="regexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatch"></a>

```typescript
public readonly regexMatch: string;
```

- *Type:* string

---

##### `suffixMatch`<sup>Required</sup> <a name="suffixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatch"></a>

```typescript
public readonly suffixMatch: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesHttpRouteRulesMatchesHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>

---


### NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference <a name="NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.endInput">endInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.startInput">startInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.end">end</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.start">start</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.endInput"></a>

```typescript
public readonly endInput: number;
```

- *Type:* number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.startInput"></a>

```typescript
public readonly startInput: number;
```

- *Type:* number

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

---


### NetworkServicesHttpRouteRulesMatchesList <a name="NetworkServicesHttpRouteRulesMatchesList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.get"></a>

```typescript
public get(index: number): NetworkServicesHttpRouteRulesMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesHttpRouteRulesMatches[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>[]

---


### NetworkServicesHttpRouteRulesMatchesOutputReference <a name="NetworkServicesHttpRouteRulesMatchesOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters">putQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetFullPathMatch">resetFullPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetPrefixMatch">resetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetQueryParameters">resetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetRegexMatch">resetRegexMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | NetworkServicesHttpRouteRulesMatchesHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>[]

---

##### `putQueryParameters` <a name="putQueryParameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters"></a>

```typescript
public putQueryParameters(value: IResolvable | NetworkServicesHttpRouteRulesMatchesQueryParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>[]

---

##### `resetFullPathMatch` <a name="resetFullPathMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetFullPathMatch"></a>

```typescript
public resetFullPathMatch(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetIgnoreCase"></a>

```typescript
public resetIgnoreCase(): void
```

##### `resetPrefixMatch` <a name="resetPrefixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetPrefixMatch"></a>

```typescript
public resetPrefixMatch(): void
```

##### `resetQueryParameters` <a name="resetQueryParameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetQueryParameters"></a>

```typescript
public resetQueryParameters(): void
```

##### `resetRegexMatch` <a name="resetRegexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetRegexMatch"></a>

```typescript
public resetRegexMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList">NetworkServicesHttpRouteRulesMatchesHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParameters">queryParameters</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList">NetworkServicesHttpRouteRulesMatchesQueryParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatchInput">fullPathMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatchInput">prefixMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParametersInput">queryParametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatchInput">regexMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatch">fullPathMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatch">prefixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatch">regexMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.headers"></a>

```typescript
public readonly headers: NetworkServicesHttpRouteRulesMatchesHeadersList;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList">NetworkServicesHttpRouteRulesMatchesHeadersList</a>

---

##### `queryParameters`<sup>Required</sup> <a name="queryParameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParameters"></a>

```typescript
public readonly queryParameters: NetworkServicesHttpRouteRulesMatchesQueryParametersList;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList">NetworkServicesHttpRouteRulesMatchesQueryParametersList</a>

---

##### `fullPathMatchInput`<sup>Optional</sup> <a name="fullPathMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatchInput"></a>

```typescript
public readonly fullPathMatchInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | NetworkServicesHttpRouteRulesMatchesHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>[]

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCaseInput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefixMatchInput`<sup>Optional</sup> <a name="prefixMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatchInput"></a>

```typescript
public readonly prefixMatchInput: string;
```

- *Type:* string

---

##### `queryParametersInput`<sup>Optional</sup> <a name="queryParametersInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParametersInput"></a>

```typescript
public readonly queryParametersInput: IResolvable | NetworkServicesHttpRouteRulesMatchesQueryParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>[]

---

##### `regexMatchInput`<sup>Optional</sup> <a name="regexMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatchInput"></a>

```typescript
public readonly regexMatchInput: string;
```

- *Type:* string

---

##### `fullPathMatch`<sup>Required</sup> <a name="fullPathMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatch"></a>

```typescript
public readonly fullPathMatch: string;
```

- *Type:* string

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string;
```

- *Type:* string

---

##### `regexMatch`<sup>Required</sup> <a name="regexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatch"></a>

```typescript
public readonly regexMatch: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesHttpRouteRulesMatches;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>

---


### NetworkServicesHttpRouteRulesMatchesQueryParametersList <a name="NetworkServicesHttpRouteRulesMatchesQueryParametersList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.get"></a>

```typescript
public get(index: number): NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesHttpRouteRulesMatchesQueryParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>[]

---


### NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference <a name="NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetExactMatch">resetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetPresentMatch">resetPresentMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetQueryParameter">resetQueryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetRegexMatch">resetRegexMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExactMatch` <a name="resetExactMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetExactMatch"></a>

```typescript
public resetExactMatch(): void
```

##### `resetPresentMatch` <a name="resetPresentMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetPresentMatch"></a>

```typescript
public resetPresentMatch(): void
```

##### `resetQueryParameter` <a name="resetQueryParameter" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetQueryParameter"></a>

```typescript
public resetQueryParameter(): void
```

##### `resetRegexMatch` <a name="resetRegexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetRegexMatch"></a>

```typescript
public resetRegexMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatchInput">exactMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatchInput">presentMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameterInput">queryParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatchInput">regexMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatch">exactMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatch">presentMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameter">queryParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatch">regexMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactMatchInput`<sup>Optional</sup> <a name="exactMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatchInput"></a>

```typescript
public readonly exactMatchInput: string;
```

- *Type:* string

---

##### `presentMatchInput`<sup>Optional</sup> <a name="presentMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatchInput"></a>

```typescript
public readonly presentMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryParameterInput`<sup>Optional</sup> <a name="queryParameterInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameterInput"></a>

```typescript
public readonly queryParameterInput: string;
```

- *Type:* string

---

##### `regexMatchInput`<sup>Optional</sup> <a name="regexMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatchInput"></a>

```typescript
public readonly regexMatchInput: string;
```

- *Type:* string

---

##### `exactMatch`<sup>Required</sup> <a name="exactMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatch"></a>

```typescript
public readonly exactMatch: string;
```

- *Type:* string

---

##### `presentMatch`<sup>Required</sup> <a name="presentMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatch"></a>

```typescript
public readonly presentMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryParameter`<sup>Required</sup> <a name="queryParameter" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameter"></a>

```typescript
public readonly queryParameter: string;
```

- *Type:* string

---

##### `regexMatch`<sup>Required</sup> <a name="regexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatch"></a>

```typescript
public readonly regexMatch: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesHttpRouteRulesMatchesQueryParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>

---


### NetworkServicesHttpRouteRulesOutputReference <a name="NetworkServicesHttpRouteRulesOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putMatches">putMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resetMatches">resetMatches</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction"></a>

```typescript
public putAction(value: NetworkServicesHttpRouteRulesAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a>

---

##### `putMatches` <a name="putMatches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putMatches"></a>

```typescript
public putMatches(value: IResolvable | NetworkServicesHttpRouteRulesMatches[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetMatches` <a name="resetMatches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resetMatches"></a>

```typescript
public resetMatches(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference">NetworkServicesHttpRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.matches">matches</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList">NetworkServicesHttpRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.matchesInput">matchesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.action"></a>

```typescript
public readonly action: NetworkServicesHttpRouteRulesActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference">NetworkServicesHttpRouteRulesActionOutputReference</a>

---

##### `matches`<sup>Required</sup> <a name="matches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.matches"></a>

```typescript
public readonly matches: NetworkServicesHttpRouteRulesMatchesList;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList">NetworkServicesHttpRouteRulesMatchesList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: NetworkServicesHttpRouteRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a>

---

##### `matchesInput`<sup>Optional</sup> <a name="matchesInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.matchesInput"></a>

```typescript
public readonly matchesInput: IResolvable | NetworkServicesHttpRouteRulesMatches[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesHttpRouteRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>

---


### NetworkServicesHttpRouteTimeoutsOutputReference <a name="NetworkServicesHttpRouteTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesHttpRoute } from '@cdktf/provider-google'

new networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesHttpRouteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>

---




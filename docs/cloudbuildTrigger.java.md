# `cloudbuildTrigger` Submodule <a name="`cloudbuildTrigger` Submodule" id="@cdktf/provider-google.cloudbuildTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudbuildTrigger <a name="CloudbuildTrigger" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger google_cloudbuild_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTrigger;

CloudbuildTrigger.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .approvalConfig(CloudbuildTriggerApprovalConfig)
//  .bitbucketServerTriggerConfig(CloudbuildTriggerBitbucketServerTriggerConfig)
//  .buildAttribute(CloudbuildTriggerBuild)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .filename(java.lang.String)
//  .filter(java.lang.String)
//  .gitFileSource(CloudbuildTriggerGitFileSource)
//  .github(CloudbuildTriggerGithub)
//  .id(java.lang.String)
//  .ignoredFiles(java.util.List<java.lang.String>)
//  .includeBuildLogs(java.lang.String)
//  .includedFiles(java.util.List<java.lang.String>)
//  .location(java.lang.String)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .pubsubConfig(CloudbuildTriggerPubsubConfig)
//  .repositoryEventConfig(CloudbuildTriggerRepositoryEventConfig)
//  .serviceAccount(java.lang.String)
//  .sourceToBuild(CloudbuildTriggerSourceToBuild)
//  .substitutions(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(CloudbuildTriggerTimeouts)
//  .triggerTemplate(CloudbuildTriggerTriggerTemplate)
//  .webhookConfig(CloudbuildTriggerWebhookConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.approvalConfig">approvalConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a></code> | approval_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.bitbucketServerTriggerConfig">bitbucketServerTriggerConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a></code> | bitbucket_server_trigger_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.buildAttribute">buildAttribute</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a></code> | build block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the trigger. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the trigger is disabled or not. If true, the trigger will never result in a build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.filename">filename</a></code> | <code>java.lang.String</code> | Path, from the source root, to a file whose contents is used for the template. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | A Common Expression Language string. Used only with Pub/Sub and Webhook. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.gitFileSource">gitFileSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a></code> | git_file_source block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.github">github</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a></code> | github block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#id CloudbuildTrigger#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.ignoredFiles">ignoredFiles</a></code> | <code>java.util.List<java.lang.String></code> | ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.includeBuildLogs">includeBuildLogs</a></code> | <code>java.lang.String</code> | Build logs will be sent back to GitHub as part of the checkrun result. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.includedFiles">includedFiles</a></code> | <code>java.util.List<java.lang.String></code> | ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the trigger. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#project CloudbuildTrigger#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.pubsubConfig">pubsubConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a></code> | pubsub_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.repositoryEventConfig">repositoryEventConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a></code> | repository_event_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.sourceToBuild">sourceToBuild</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a></code> | source_to_build block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.substitutions">substitutions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Substitutions data for Build resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags for annotation of a BuildTrigger. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.triggerTemplate">triggerTemplate</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a></code> | trigger_template block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.webhookConfig">webhookConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a></code> | webhook_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approvalConfig`<sup>Optional</sup> <a name="approvalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.approvalConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

approval_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#approval_config CloudbuildTrigger#approval_config}

---

##### `bitbucketServerTriggerConfig`<sup>Optional</sup> <a name="bitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.bitbucketServerTriggerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a>

bitbucket_server_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#bitbucket_server_trigger_config CloudbuildTrigger#bitbucket_server_trigger_config}

---

##### `buildAttribute`<sup>Optional</sup> <a name="buildAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.buildAttribute"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

build block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#build CloudbuildTrigger#build}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-readable description of the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#description CloudbuildTrigger#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the trigger is disabled or not. If true, the trigger will never result in a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#disabled CloudbuildTrigger#disabled}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.filename"></a>

- *Type:* java.lang.String

Path, from the source root, to a file whose contents is used for the template.

Either a filename or build template must be provided. Set this only when using trigger_template or github.
When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#filename CloudbuildTrigger#filename}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

A Common Expression Language string. Used only with Pub/Sub and Webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#filter CloudbuildTrigger#filter}

---

##### `gitFileSource`<sup>Optional</sup> <a name="gitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.gitFileSource"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

git_file_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#git_file_source CloudbuildTrigger#git_file_source}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.github"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#github CloudbuildTrigger#github}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#id CloudbuildTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoredFiles`<sup>Optional</sup> <a name="ignoredFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.ignoredFiles"></a>

- *Type:* java.util.List<java.lang.String>

ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'.

If ignoredFiles and changed files are both empty, then they are not
used to determine whether or not to trigger a build.

If ignoredFiles is not empty, then we ignore any files that match any
of the ignored_file globs. If the change has no files that are outside
of the ignoredFiles globs, then we do not trigger a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#ignored_files CloudbuildTrigger#ignored_files}

---

##### `includeBuildLogs`<sup>Optional</sup> <a name="includeBuildLogs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.includeBuildLogs"></a>

- *Type:* java.lang.String

Build logs will be sent back to GitHub as part of the checkrun result.

Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or
INCLUDE_BUILD_LOGS_WITH_STATUS Possible values: ["INCLUDE_BUILD_LOGS_UNSPECIFIED", "INCLUDE_BUILD_LOGS_WITH_STATUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#include_build_logs CloudbuildTrigger#include_build_logs}

---

##### `includedFiles`<sup>Optional</sup> <a name="includedFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.includedFiles"></a>

- *Type:* java.util.List<java.lang.String>

ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is empty, then as far as this filter is concerned, we
should trigger the build.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is not empty, then we make sure that at least one of
those files matches a includedFiles glob. If not, then we do not trigger
a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#included_files CloudbuildTrigger#included_files}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#location CloudbuildTrigger#location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the trigger. Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#project CloudbuildTrigger#project}.

---

##### `pubsubConfig`<sup>Optional</sup> <a name="pubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.pubsubConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

pubsub_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#pubsub_config CloudbuildTrigger#pubsub_config}

---

##### `repositoryEventConfig`<sup>Optional</sup> <a name="repositoryEventConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.repositoryEventConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a>

repository_event_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#repository_event_config CloudbuildTrigger#repository_event_config}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel.

If no service account is set, then the standard Cloud Build service account
([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.

Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#service_account CloudbuildTrigger#service_account}

---

##### `sourceToBuild`<sup>Optional</sup> <a name="sourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.sourceToBuild"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

source_to_build block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#source_to_build CloudbuildTrigger#source_to_build}

---

##### `substitutions`<sup>Optional</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.substitutions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Substitutions data for Build resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Tags for annotation of a BuildTrigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#tags CloudbuildTrigger#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#timeouts CloudbuildTrigger#timeouts}

---

##### `triggerTemplate`<sup>Optional</sup> <a name="triggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.triggerTemplate"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

trigger_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#trigger_template CloudbuildTrigger#trigger_template}

---

##### `webhookConfig`<sup>Optional</sup> <a name="webhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.webhookConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

webhook_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#webhook_config CloudbuildTrigger#webhook_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putApprovalConfig">putApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBitbucketServerTriggerConfig">putBitbucketServerTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute">putBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource">putGitFileSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putPubsubConfig">putPubsubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putRepositoryEventConfig">putRepositoryEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild">putSourceToBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate">putTriggerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putWebhookConfig">putWebhookConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetApprovalConfig">resetApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetBitbucketServerTriggerConfig">resetBitbucketServerTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetBuildAttribute">resetBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGitFileSource">resetGitFileSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIgnoredFiles">resetIgnoredFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludeBuildLogs">resetIncludeBuildLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludedFiles">resetIncludedFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetPubsubConfig">resetPubsubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetRepositoryEventConfig">resetRepositoryEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSourceToBuild">resetSourceToBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSubstitutions">resetSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTriggerTemplate">resetTriggerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetWebhookConfig">resetWebhookConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalConfig` <a name="putApprovalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putApprovalConfig"></a>

```java
public void putApprovalConfig(CloudbuildTriggerApprovalConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putApprovalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

---

##### `putBitbucketServerTriggerConfig` <a name="putBitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBitbucketServerTriggerConfig"></a>

```java
public void putBitbucketServerTriggerConfig(CloudbuildTriggerBitbucketServerTriggerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBitbucketServerTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a>

---

##### `putBuildAttribute` <a name="putBuildAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute"></a>

```java
public void putBuildAttribute(CloudbuildTriggerBuild value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

---

##### `putGitFileSource` <a name="putGitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource"></a>

```java
public void putGitFileSource(CloudbuildTriggerGitFileSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

---

##### `putGithub` <a name="putGithub" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub"></a>

```java
public void putGithub(CloudbuildTriggerGithub value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

---

##### `putPubsubConfig` <a name="putPubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putPubsubConfig"></a>

```java
public void putPubsubConfig(CloudbuildTriggerPubsubConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putPubsubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

---

##### `putRepositoryEventConfig` <a name="putRepositoryEventConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putRepositoryEventConfig"></a>

```java
public void putRepositoryEventConfig(CloudbuildTriggerRepositoryEventConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putRepositoryEventConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a>

---

##### `putSourceToBuild` <a name="putSourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild"></a>

```java
public void putSourceToBuild(CloudbuildTriggerSourceToBuild value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTimeouts"></a>

```java
public void putTimeouts(CloudbuildTriggerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>

---

##### `putTriggerTemplate` <a name="putTriggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate"></a>

```java
public void putTriggerTemplate(CloudbuildTriggerTriggerTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

---

##### `putWebhookConfig` <a name="putWebhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putWebhookConfig"></a>

```java
public void putWebhookConfig(CloudbuildTriggerWebhookConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putWebhookConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

---

##### `resetApprovalConfig` <a name="resetApprovalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetApprovalConfig"></a>

```java
public void resetApprovalConfig()
```

##### `resetBitbucketServerTriggerConfig` <a name="resetBitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetBitbucketServerTriggerConfig"></a>

```java
public void resetBitbucketServerTriggerConfig()
```

##### `resetBuildAttribute` <a name="resetBuildAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetBuildAttribute"></a>

```java
public void resetBuildAttribute()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilename"></a>

```java
public void resetFilename()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetGitFileSource` <a name="resetGitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGitFileSource"></a>

```java
public void resetGitFileSource()
```

##### `resetGithub` <a name="resetGithub" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGithub"></a>

```java
public void resetGithub()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoredFiles` <a name="resetIgnoredFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIgnoredFiles"></a>

```java
public void resetIgnoredFiles()
```

##### `resetIncludeBuildLogs` <a name="resetIncludeBuildLogs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludeBuildLogs"></a>

```java
public void resetIncludeBuildLogs()
```

##### `resetIncludedFiles` <a name="resetIncludedFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludedFiles"></a>

```java
public void resetIncludedFiles()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetName"></a>

```java
public void resetName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetProject"></a>

```java
public void resetProject()
```

##### `resetPubsubConfig` <a name="resetPubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetPubsubConfig"></a>

```java
public void resetPubsubConfig()
```

##### `resetRepositoryEventConfig` <a name="resetRepositoryEventConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetRepositoryEventConfig"></a>

```java
public void resetRepositoryEventConfig()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetSourceToBuild` <a name="resetSourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSourceToBuild"></a>

```java
public void resetSourceToBuild()
```

##### `resetSubstitutions` <a name="resetSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSubstitutions"></a>

```java
public void resetSubstitutions()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTriggerTemplate` <a name="resetTriggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTriggerTemplate"></a>

```java
public void resetTriggerTemplate()
```

##### `resetWebhookConfig` <a name="resetWebhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetWebhookConfig"></a>

```java
public void resetWebhookConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudbuildTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTrigger;

CloudbuildTrigger.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTrigger;

CloudbuildTrigger.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTrigger;

CloudbuildTrigger.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTrigger;

CloudbuildTrigger.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudbuildTrigger.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudbuildTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudbuildTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudbuildTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudbuildTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfig">approvalConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference">CloudbuildTriggerApprovalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.bitbucketServerTriggerConfig">bitbucketServerTriggerConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttribute">buildAttribute</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference">CloudbuildTriggerBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSource">gitFileSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference">CloudbuildTriggerGitFileSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.github">github</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference">CloudbuildTriggerGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfig">pubsubConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference">CloudbuildTriggerPubsubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.repositoryEventConfig">repositoryEventConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference">CloudbuildTriggerRepositoryEventConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuild">sourceToBuild</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference">CloudbuildTriggerSourceToBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference">CloudbuildTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerId">triggerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplate">triggerTemplate</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference">CloudbuildTriggerTriggerTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfig">webhookConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference">CloudbuildTriggerWebhookConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfigInput">approvalConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.bitbucketServerTriggerConfigInput">bitbucketServerTriggerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttributeInput">buildAttributeInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filenameInput">filenameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSourceInput">gitFileSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.githubInput">githubInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFilesInput">ignoredFilesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogsInput">includeBuildLogsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFilesInput">includedFilesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfigInput">pubsubConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.repositoryEventConfigInput">repositoryEventConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuildInput">sourceToBuildInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutionsInput">substitutionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplateInput">triggerTemplateInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfigInput">webhookConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filename">filename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFiles">ignoredFiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogs">includeBuildLogs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFiles">includedFiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutions">substitutions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approvalConfig`<sup>Required</sup> <a name="approvalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfig"></a>

```java
public CloudbuildTriggerApprovalConfigOutputReference getApprovalConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference">CloudbuildTriggerApprovalConfigOutputReference</a>

---

##### `bitbucketServerTriggerConfig`<sup>Required</sup> <a name="bitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.bitbucketServerTriggerConfig"></a>

```java
public CloudbuildTriggerBitbucketServerTriggerConfigOutputReference getBitbucketServerTriggerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigOutputReference</a>

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttribute"></a>

```java
public CloudbuildTriggerBuildOutputReference getBuildAttribute();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference">CloudbuildTriggerBuildOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `gitFileSource`<sup>Required</sup> <a name="gitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSource"></a>

```java
public CloudbuildTriggerGitFileSourceOutputReference getGitFileSource();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference">CloudbuildTriggerGitFileSourceOutputReference</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.github"></a>

```java
public CloudbuildTriggerGithubOutputReference getGithub();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference">CloudbuildTriggerGithubOutputReference</a>

---

##### `pubsubConfig`<sup>Required</sup> <a name="pubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfig"></a>

```java
public CloudbuildTriggerPubsubConfigOutputReference getPubsubConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference">CloudbuildTriggerPubsubConfigOutputReference</a>

---

##### `repositoryEventConfig`<sup>Required</sup> <a name="repositoryEventConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.repositoryEventConfig"></a>

```java
public CloudbuildTriggerRepositoryEventConfigOutputReference getRepositoryEventConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference">CloudbuildTriggerRepositoryEventConfigOutputReference</a>

---

##### `sourceToBuild`<sup>Required</sup> <a name="sourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuild"></a>

```java
public CloudbuildTriggerSourceToBuildOutputReference getSourceToBuild();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference">CloudbuildTriggerSourceToBuildOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeouts"></a>

```java
public CloudbuildTriggerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference">CloudbuildTriggerTimeoutsOutputReference</a>

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerId"></a>

```java
public java.lang.String getTriggerId();
```

- *Type:* java.lang.String

---

##### `triggerTemplate`<sup>Required</sup> <a name="triggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplate"></a>

```java
public CloudbuildTriggerTriggerTemplateOutputReference getTriggerTemplate();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference">CloudbuildTriggerTriggerTemplateOutputReference</a>

---

##### `webhookConfig`<sup>Required</sup> <a name="webhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfig"></a>

```java
public CloudbuildTriggerWebhookConfigOutputReference getWebhookConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference">CloudbuildTriggerWebhookConfigOutputReference</a>

---

##### `approvalConfigInput`<sup>Optional</sup> <a name="approvalConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfigInput"></a>

```java
public CloudbuildTriggerApprovalConfig getApprovalConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

---

##### `bitbucketServerTriggerConfigInput`<sup>Optional</sup> <a name="bitbucketServerTriggerConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.bitbucketServerTriggerConfigInput"></a>

```java
public CloudbuildTriggerBitbucketServerTriggerConfig getBitbucketServerTriggerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a>

---

##### `buildAttributeInput`<sup>Optional</sup> <a name="buildAttributeInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttributeInput"></a>

```java
public CloudbuildTriggerBuild getBuildAttributeInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filenameInput"></a>

```java
public java.lang.String getFilenameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `gitFileSourceInput`<sup>Optional</sup> <a name="gitFileSourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSourceInput"></a>

```java
public CloudbuildTriggerGitFileSource getGitFileSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.githubInput"></a>

```java
public CloudbuildTriggerGithub getGithubInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoredFilesInput`<sup>Optional</sup> <a name="ignoredFilesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFilesInput"></a>

```java
public java.util.List<java.lang.String> getIgnoredFilesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeBuildLogsInput`<sup>Optional</sup> <a name="includeBuildLogsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogsInput"></a>

```java
public java.lang.String getIncludeBuildLogsInput();
```

- *Type:* java.lang.String

---

##### `includedFilesInput`<sup>Optional</sup> <a name="includedFilesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFilesInput"></a>

```java
public java.util.List<java.lang.String> getIncludedFilesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pubsubConfigInput`<sup>Optional</sup> <a name="pubsubConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfigInput"></a>

```java
public CloudbuildTriggerPubsubConfig getPubsubConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

---

##### `repositoryEventConfigInput`<sup>Optional</sup> <a name="repositoryEventConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.repositoryEventConfigInput"></a>

```java
public CloudbuildTriggerRepositoryEventConfig getRepositoryEventConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `sourceToBuildInput`<sup>Optional</sup> <a name="sourceToBuildInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuildInput"></a>

```java
public CloudbuildTriggerSourceToBuild getSourceToBuildInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

---

##### `substitutionsInput`<sup>Optional</sup> <a name="substitutionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSubstitutionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>

---

##### `triggerTemplateInput`<sup>Optional</sup> <a name="triggerTemplateInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplateInput"></a>

```java
public CloudbuildTriggerTriggerTemplate getTriggerTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

---

##### `webhookConfigInput`<sup>Optional</sup> <a name="webhookConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfigInput"></a>

```java
public CloudbuildTriggerWebhookConfig getWebhookConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoredFiles`<sup>Required</sup> <a name="ignoredFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFiles"></a>

```java
public java.util.List<java.lang.String> getIgnoredFiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeBuildLogs`<sup>Required</sup> <a name="includeBuildLogs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogs"></a>

```java
public java.lang.String getIncludeBuildLogs();
```

- *Type:* java.lang.String

---

##### `includedFiles`<sup>Required</sup> <a name="includedFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFiles"></a>

```java
public java.util.List<java.lang.String> getIncludedFiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `substitutions`<sup>Required</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSubstitutions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudbuildTriggerApprovalConfig <a name="CloudbuildTriggerApprovalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerApprovalConfig;

CloudbuildTriggerApprovalConfig.builder()
//  .approvalRequired(java.lang.Boolean)
//  .approvalRequired(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig.property.approvalRequired">approvalRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not approval is needed. |

---

##### `approvalRequired`<sup>Optional</sup> <a name="approvalRequired" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig.property.approvalRequired"></a>

```java
public java.lang.Object getApprovalRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not approval is needed.

If this is set on a build, it will become pending when run,
and will need to be explicitly approved to start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#approval_required CloudbuildTrigger#approval_required}

---

### CloudbuildTriggerBitbucketServerTriggerConfig <a name="CloudbuildTriggerBitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBitbucketServerTriggerConfig;

CloudbuildTriggerBitbucketServerTriggerConfig.builder()
    .bitbucketServerConfigResource(java.lang.String)
    .projectKey(java.lang.String)
    .repoSlug(java.lang.String)
//  .pullRequest(CloudbuildTriggerBitbucketServerTriggerConfigPullRequest)
//  .push(CloudbuildTriggerBitbucketServerTriggerConfigPush)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.bitbucketServerConfigResource">bitbucketServerConfigResource</a></code> | <code>java.lang.String</code> | The Bitbucket server config resource that this trigger config maps to. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.repoSlug">repoSlug</a></code> | <code>java.lang.String</code> | Slug of the repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.push">push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | push block. |

---

##### `bitbucketServerConfigResource`<sup>Required</sup> <a name="bitbucketServerConfigResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.bitbucketServerConfigResource"></a>

```java
public java.lang.String getBitbucketServerConfigResource();
```

- *Type:* java.lang.String

The Bitbucket server config resource that this trigger config maps to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#bitbucket_server_config_resource CloudbuildTrigger#bitbucket_server_config_resource}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#project_key CloudbuildTrigger#project_key}

---

##### `repoSlug`<sup>Required</sup> <a name="repoSlug" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.repoSlug"></a>

```java
public java.lang.String getRepoSlug();
```

- *Type:* java.lang.String

Slug of the repository.

A repository slug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL.
For example, if the repository name is 'test repo', in the URL it would become 'test-repo' as in https://mybitbucket.server/projects/TEST/repos/test-repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#repo_slug CloudbuildTrigger#repo_slug}

---

##### `pullRequest`<sup>Optional</sup> <a name="pullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.pullRequest"></a>

```java
public CloudbuildTriggerBitbucketServerTriggerConfigPullRequest getPullRequest();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#pull_request CloudbuildTrigger#pull_request}

---

##### `push`<sup>Optional</sup> <a name="push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.push"></a>

```java
public CloudbuildTriggerBitbucketServerTriggerConfigPush getPush();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a>

push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#push CloudbuildTrigger#push}

---

### CloudbuildTriggerBitbucketServerTriggerConfigPullRequest <a name="CloudbuildTriggerBitbucketServerTriggerConfigPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest;

CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.builder()
    .branch(java.lang.String)
//  .commentControl(java.lang.String)
//  .invertRegex(java.lang.Boolean)
//  .invertRegex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.branch">branch</a></code> | <code>java.lang.String</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.commentControl">commentControl</a></code> | <code>java.lang.String</code> | Configure builds to run whether a repository owner or collaborator need to comment /gcbrun. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, branches that do NOT match the git_ref will trigger a build. |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Regex of branches to match.

The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `commentControl`<sup>Optional</sup> <a name="commentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.commentControl"></a>

```java
public java.lang.String getCommentControl();
```

- *Type:* java.lang.String

Configure builds to run whether a repository owner or collaborator need to comment /gcbrun. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#comment_control CloudbuildTrigger#comment_control}

---

##### `invertRegex`<sup>Optional</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, branches that do NOT match the git_ref will trigger a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

### CloudbuildTriggerBitbucketServerTriggerConfigPush <a name="CloudbuildTriggerBitbucketServerTriggerConfigPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBitbucketServerTriggerConfigPush;

CloudbuildTriggerBitbucketServerTriggerConfigPush.builder()
//  .branch(java.lang.String)
//  .invertRegex(java.lang.Boolean)
//  .invertRegex(IResolvable)
//  .tag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.branch">branch</a></code> | <code>java.lang.String</code> | Regex of branches to match.  Specify only one of branch or tag. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, only trigger a build if the revision regex does NOT match the gitRef regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.tag">tag</a></code> | <code>java.lang.String</code> | Regex of tags to match.  Specify only one of branch or tag. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Regex of branches to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `invertRegex`<sup>Optional</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, only trigger a build if the revision regex does NOT match the gitRef regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

Regex of tags to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#tag CloudbuildTrigger#tag}

---

### CloudbuildTriggerBuild <a name="CloudbuildTriggerBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuild;

CloudbuildTriggerBuild.builder()
    .step(IResolvable)
    .step(java.util.List<CloudbuildTriggerBuildStep>)
//  .artifacts(CloudbuildTriggerBuildArtifacts)
//  .availableSecrets(CloudbuildTriggerBuildAvailableSecrets)
//  .images(java.util.List<java.lang.String>)
//  .logsBucket(java.lang.String)
//  .options(CloudbuildTriggerBuildOptions)
//  .queueTtl(java.lang.String)
//  .secret(IResolvable)
//  .secret(java.util.List<CloudbuildTriggerBuildSecret>)
//  .source(CloudbuildTriggerBuildSource)
//  .substitutions(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(java.util.List<java.lang.String>)
//  .timeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.step">step</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>></code> | step block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.artifacts">artifacts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a></code> | artifacts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.availableSecrets">availableSecrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a></code> | available_secrets block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.images">images</a></code> | <code>java.util.List<java.lang.String></code> | A list of images to be pushed upon the successful completion of all build steps. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.logsBucket">logsBucket</a></code> | <code>java.lang.String</code> | Google Cloud Storage bucket where logs should be written. Logs file names will be of the format ${logsBucket}/log-${build_id}.txt. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.options">options</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.queueTtl">queueTtl</a></code> | <code>java.lang.String</code> | TTL in queue for this build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.secret">secret</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>></code> | secret block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.substitutions">substitutions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Substitutions data for Build resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags for annotation of a Build. These are not docker tags. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Amount of time that this build should be allowed to run, to second granularity. |

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.step"></a>

```java
public java.lang.Object getStep();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>>

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#step CloudbuildTrigger#step}

---

##### `artifacts`<sup>Optional</sup> <a name="artifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.artifacts"></a>

```java
public CloudbuildTriggerBuildArtifacts getArtifacts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#artifacts CloudbuildTrigger#artifacts}

---

##### `availableSecrets`<sup>Optional</sup> <a name="availableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.availableSecrets"></a>

```java
public CloudbuildTriggerBuildAvailableSecrets getAvailableSecrets();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

available_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#available_secrets CloudbuildTrigger#available_secrets}

---

##### `images`<sup>Optional</sup> <a name="images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.images"></a>

```java
public java.util.List<java.lang.String> getImages();
```

- *Type:* java.util.List<java.lang.String>

A list of images to be pushed upon the successful completion of all build steps.

The images are pushed using the builder service account's credentials.
The digests of the pushed images will be stored in the Build resource's results field.
If any of the images fail to be pushed, the build status is marked FAILURE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#images CloudbuildTrigger#images}

---

##### `logsBucket`<sup>Optional</sup> <a name="logsBucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.logsBucket"></a>

```java
public java.lang.String getLogsBucket();
```

- *Type:* java.lang.String

Google Cloud Storage bucket where logs should be written. Logs file names will be of the format ${logsBucket}/log-${build_id}.txt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#logs_bucket CloudbuildTrigger#logs_bucket}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.options"></a>

```java
public CloudbuildTriggerBuildOptions getOptions();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#options CloudbuildTrigger#options}

---

##### `queueTtl`<sup>Optional</sup> <a name="queueTtl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.queueTtl"></a>

```java
public java.lang.String getQueueTtl();
```

- *Type:* java.lang.String

TTL in queue for this build.

If provided and the build is enqueued longer than this value,
the build will expire and the build status will be EXPIRED.
The TTL starts ticking from createTime.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#queue_ttl CloudbuildTrigger#queue_ttl}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.secret"></a>

```java
public java.lang.Object getSecret();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#secret CloudbuildTrigger#secret}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.source"></a>

```java
public CloudbuildTriggerBuildSource getSource();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#source CloudbuildTrigger#source}

---

##### `substitutions`<sup>Optional</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.substitutions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSubstitutions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Substitutions data for Build resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags for annotation of a Build. These are not docker tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#tags CloudbuildTrigger#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Amount of time that this build should be allowed to run, to second granularity.

If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
The expected format is the number of seconds followed by s.
Default time is ten minutes (600s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#timeout CloudbuildTrigger#timeout}

---

### CloudbuildTriggerBuildArtifacts <a name="CloudbuildTriggerBuildArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifacts;

CloudbuildTriggerBuildArtifacts.builder()
//  .images(java.util.List<java.lang.String>)
//  .mavenArtifacts(IResolvable)
//  .mavenArtifacts(java.util.List<CloudbuildTriggerBuildArtifactsMavenArtifacts>)
//  .npmPackages(IResolvable)
//  .npmPackages(java.util.List<CloudbuildTriggerBuildArtifactsNpmPackages>)
//  .objects(CloudbuildTriggerBuildArtifactsObjects)
//  .pythonPackages(IResolvable)
//  .pythonPackages(java.util.List<CloudbuildTriggerBuildArtifactsPythonPackages>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.images">images</a></code> | <code>java.util.List<java.lang.String></code> | A list of images to be pushed upon the successful completion of all build steps. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.mavenArtifacts">mavenArtifacts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts">CloudbuildTriggerBuildArtifactsMavenArtifacts</a>></code> | maven_artifacts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.npmPackages">npmPackages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages">CloudbuildTriggerBuildArtifactsNpmPackages</a>></code> | npm_packages block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.objects">objects</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a></code> | objects block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.pythonPackages">pythonPackages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages">CloudbuildTriggerBuildArtifactsPythonPackages</a>></code> | python_packages block. |

---

##### `images`<sup>Optional</sup> <a name="images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.images"></a>

```java
public java.util.List<java.lang.String> getImages();
```

- *Type:* java.util.List<java.lang.String>

A list of images to be pushed upon the successful completion of all build steps.

The images will be pushed using the builder service account's credentials.

The digests of the pushed images will be stored in the Build resource's results field.

If any of the images fail to be pushed, the build is marked FAILURE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#images CloudbuildTrigger#images}

---

##### `mavenArtifacts`<sup>Optional</sup> <a name="mavenArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.mavenArtifacts"></a>

```java
public java.lang.Object getMavenArtifacts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts">CloudbuildTriggerBuildArtifactsMavenArtifacts</a>>

maven_artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#maven_artifacts CloudbuildTrigger#maven_artifacts}

---

##### `npmPackages`<sup>Optional</sup> <a name="npmPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.npmPackages"></a>

```java
public java.lang.Object getNpmPackages();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages">CloudbuildTriggerBuildArtifactsNpmPackages</a>>

npm_packages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#npm_packages CloudbuildTrigger#npm_packages}

---

##### `objects`<sup>Optional</sup> <a name="objects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.objects"></a>

```java
public CloudbuildTriggerBuildArtifactsObjects getObjects();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#objects CloudbuildTrigger#objects}

---

##### `pythonPackages`<sup>Optional</sup> <a name="pythonPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.pythonPackages"></a>

```java
public java.lang.Object getPythonPackages();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages">CloudbuildTriggerBuildArtifactsPythonPackages</a>>

python_packages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#python_packages CloudbuildTrigger#python_packages}

---

### CloudbuildTriggerBuildArtifactsMavenArtifacts <a name="CloudbuildTriggerBuildArtifactsMavenArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsMavenArtifacts;

CloudbuildTriggerBuildArtifactsMavenArtifacts.builder()
//  .artifactId(java.lang.String)
//  .groupId(java.lang.String)
//  .path(java.lang.String)
//  .repository(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.artifactId">artifactId</a></code> | <code>java.lang.String</code> | Maven artifactId value used when uploading the artifact to Artifact Registry. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Maven groupId value used when uploading the artifact to Artifact Registry. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.path">path</a></code> | <code>java.lang.String</code> | Path to an artifact in the build's workspace to be uploaded to Artifact Registry. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.repository">repository</a></code> | <code>java.lang.String</code> | Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.version">version</a></code> | <code>java.lang.String</code> | Maven version value used when uploading the artifact to Artifact Registry. |

---

##### `artifactId`<sup>Optional</sup> <a name="artifactId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.artifactId"></a>

```java
public java.lang.String getArtifactId();
```

- *Type:* java.lang.String

Maven artifactId value used when uploading the artifact to Artifact Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#artifact_id CloudbuildTrigger#artifact_id}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Maven groupId value used when uploading the artifact to Artifact Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#group_id CloudbuildTrigger#group_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to an artifact in the build's workspace to be uploaded to Artifact Registry.

This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#path CloudbuildTrigger#path}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY".

Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#repository CloudbuildTrigger#repository}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Maven version value used when uploading the artifact to Artifact Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#version CloudbuildTrigger#version}

---

### CloudbuildTriggerBuildArtifactsNpmPackages <a name="CloudbuildTriggerBuildArtifactsNpmPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsNpmPackages;

CloudbuildTriggerBuildArtifactsNpmPackages.builder()
//  .packagePath(java.lang.String)
//  .repository(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages.property.packagePath">packagePath</a></code> | <code>java.lang.String</code> | Path to the package.json. e.g. workspace/path/to/package. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages.property.repository">repository</a></code> | <code>java.lang.String</code> | Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY". |

---

##### `packagePath`<sup>Optional</sup> <a name="packagePath" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages.property.packagePath"></a>

```java
public java.lang.String getPackagePath();
```

- *Type:* java.lang.String

Path to the package.json. e.g. workspace/path/to/package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#package_path CloudbuildTrigger#package_path}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY".

Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#repository CloudbuildTrigger#repository}

---

### CloudbuildTriggerBuildArtifactsObjects <a name="CloudbuildTriggerBuildArtifactsObjects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsObjects;

CloudbuildTriggerBuildArtifactsObjects.builder()
//  .location(java.lang.String)
//  .paths(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.location">location</a></code> | <code>java.lang.String</code> | Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | Path globs used to match files in the build's workspace. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/".

Files in the workspace matching any path pattern will be uploaded to Cloud Storage with
this location as a prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#location CloudbuildTrigger#location}

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

Path globs used to match files in the build's workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#paths CloudbuildTrigger#paths}

---

### CloudbuildTriggerBuildArtifactsObjectsTiming <a name="CloudbuildTriggerBuildArtifactsObjectsTiming" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsObjectsTiming;

CloudbuildTriggerBuildArtifactsObjectsTiming.builder()
    .build();
```


### CloudbuildTriggerBuildArtifactsPythonPackages <a name="CloudbuildTriggerBuildArtifactsPythonPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsPythonPackages;

CloudbuildTriggerBuildArtifactsPythonPackages.builder()
//  .paths(java.util.List<java.lang.String>)
//  .repository(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | Path globs used to match files in the build's workspace. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages.property.repository">repository</a></code> | <code>java.lang.String</code> | Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY". |

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

Path globs used to match files in the build's workspace.

For Python/ Twine, this is usually dist/*, and sometimes additionally an .asc file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#paths CloudbuildTrigger#paths}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY".

Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#repository CloudbuildTrigger#repository}

---

### CloudbuildTriggerBuildAvailableSecrets <a name="CloudbuildTriggerBuildAvailableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildAvailableSecrets;

CloudbuildTriggerBuildAvailableSecrets.builder()
    .secretManager(IResolvable)
    .secretManager(java.util.List<CloudbuildTriggerBuildAvailableSecretsSecretManager>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets.property.secretManager">secretManager</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>></code> | secret_manager block. |

---

##### `secretManager`<sup>Required</sup> <a name="secretManager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets.property.secretManager"></a>

```java
public java.lang.Object getSecretManager();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>>

secret_manager block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#secret_manager CloudbuildTrigger#secret_manager}

---

### CloudbuildTriggerBuildAvailableSecretsSecretManager <a name="CloudbuildTriggerBuildAvailableSecretsSecretManager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildAvailableSecretsSecretManager;

CloudbuildTriggerBuildAvailableSecretsSecretManager.builder()
    .env(java.lang.String)
    .versionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.env">env</a></code> | <code>java.lang.String</code> | Environment variable name to associate with the secret. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.versionName">versionName</a></code> | <code>java.lang.String</code> | Resource name of the SecretVersion. In format: projects/* /secrets/* /versions/*. |

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.env"></a>

```java
public java.lang.String getEnv();
```

- *Type:* java.lang.String

Environment variable name to associate with the secret.

Secret environment
variables must be unique across all of a build's secrets, and must be used
by at least one build step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#env CloudbuildTrigger#env}

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

Resource name of the SecretVersion. In format: projects/* /secrets/* /versions/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#version_name CloudbuildTrigger#version_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### CloudbuildTriggerBuildOptions <a name="CloudbuildTriggerBuildOptions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildOptions;

CloudbuildTriggerBuildOptions.builder()
//  .diskSizeGb(java.lang.Number)
//  .dynamicSubstitutions(java.lang.Boolean)
//  .dynamicSubstitutions(IResolvable)
//  .env(java.util.List<java.lang.String>)
//  .logging(java.lang.String)
//  .logStreamingOption(java.lang.String)
//  .machineType(java.lang.String)
//  .requestedVerifyOption(java.lang.String)
//  .secretEnv(java.util.List<java.lang.String>)
//  .sourceProvenanceHash(java.util.List<java.lang.String>)
//  .substitutionOption(java.lang.String)
//  .volumes(IResolvable)
//  .volumes(java.util.List<CloudbuildTriggerBuildOptionsVolumes>)
//  .workerPool(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Requested disk size for the VM that runs the build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.dynamicSubstitutions">dynamicSubstitutions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to specify whether or not to apply bash style string operations to the substitutions. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.env">env</a></code> | <code>java.util.List<java.lang.String></code> | A list of global environment variable definitions that will exist for all build steps in this build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logging">logging</a></code> | <code>java.lang.String</code> | Option to specify the logging mode, which determines if and where build logs are stored. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logStreamingOption">logStreamingOption</a></code> | <code>java.lang.String</code> | Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.machineType">machineType</a></code> | <code>java.lang.String</code> | Compute Engine machine type on which to run the build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.requestedVerifyOption">requestedVerifyOption</a></code> | <code>java.lang.String</code> | Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.secretEnv">secretEnv</a></code> | <code>java.util.List<java.lang.String></code> | A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.sourceProvenanceHash">sourceProvenanceHash</a></code> | <code>java.util.List<java.lang.String></code> | Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.substitutionOption">substitutionOption</a></code> | <code>java.lang.String</code> | Option to specify behavior when there is an error in the substitution checks. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.volumes">volumes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>></code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.workerPool">workerPool</a></code> | <code>java.lang.String</code> | Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}. |

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Requested disk size for the VM that runs the build.

Note that this is NOT "disk free";
some of the space will be used by the operating system and build utilities.
Also note that this is the minimum disk size that will be allocated for the build --
the build may run with a larger disk than requested. At present, the maximum disk size
is 1000GB; builds that request more than the maximum are rejected with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#disk_size_gb CloudbuildTrigger#disk_size_gb}

---

##### `dynamicSubstitutions`<sup>Optional</sup> <a name="dynamicSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.dynamicSubstitutions"></a>

```java
public java.lang.Object getDynamicSubstitutions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to specify whether or not to apply bash style string operations to the substitutions.

NOTE this is always enabled for triggered builds and cannot be overridden in the build configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#dynamic_substitutions CloudbuildTrigger#dynamic_substitutions}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.env"></a>

```java
public java.util.List<java.lang.String> getEnv();
```

- *Type:* java.util.List<java.lang.String>

A list of global environment variable definitions that will exist for all build steps in this build.

If a variable is defined in both globally and in a build step,
the variable will use the build step value.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#env CloudbuildTrigger#env}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logging"></a>

```java
public java.lang.String getLogging();
```

- *Type:* java.lang.String

Option to specify the logging mode, which determines if and where build logs are stored.

Possible values: ["LOGGING_UNSPECIFIED", "LEGACY", "GCS_ONLY", "STACKDRIVER_ONLY", "CLOUD_LOGGING_ONLY", "NONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#logging CloudbuildTrigger#logging}

---

##### `logStreamingOption`<sup>Optional</sup> <a name="logStreamingOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logStreamingOption"></a>

```java
public java.lang.String getLogStreamingOption();
```

- *Type:* java.lang.String

Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#log_streaming_option CloudbuildTrigger#log_streaming_option}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

Compute Engine machine type on which to run the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#machine_type CloudbuildTrigger#machine_type}

---

##### `requestedVerifyOption`<sup>Optional</sup> <a name="requestedVerifyOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.requestedVerifyOption"></a>

```java
public java.lang.String getRequestedVerifyOption();
```

- *Type:* java.lang.String

Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#requested_verify_option CloudbuildTrigger#requested_verify_option}

---

##### `secretEnv`<sup>Optional</sup> <a name="secretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.secretEnv"></a>

```java
public java.util.List<java.lang.String> getSecretEnv();
```

- *Type:* java.util.List<java.lang.String>

A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key.

These values must be specified in the build's Secret. These variables
will be available to all build steps in this build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}

---

##### `sourceProvenanceHash`<sup>Optional</sup> <a name="sourceProvenanceHash" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.sourceProvenanceHash"></a>

```java
public java.util.List<java.lang.String> getSourceProvenanceHash();
```

- *Type:* java.util.List<java.lang.String>

Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#source_provenance_hash CloudbuildTrigger#source_provenance_hash}

---

##### `substitutionOption`<sup>Optional</sup> <a name="substitutionOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.substitutionOption"></a>

```java
public java.lang.String getSubstitutionOption();
```

- *Type:* java.lang.String

Option to specify behavior when there is an error in the substitution checks.

NOTE this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden
in the build configuration file. Possible values: ["MUST_MATCH", "ALLOW_LOOSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#substitution_option CloudbuildTrigger#substitution_option}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.volumes"></a>

```java
public java.lang.Object getVolumes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#volumes CloudbuildTrigger#volumes}

---

##### `workerPool`<sup>Optional</sup> <a name="workerPool" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.workerPool"></a>

```java
public java.lang.String getWorkerPool();
```

- *Type:* java.lang.String

Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}.

This field is experimental.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#worker_pool CloudbuildTrigger#worker_pool}

---

### CloudbuildTriggerBuildOptionsVolumes <a name="CloudbuildTriggerBuildOptionsVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildOptionsVolumes;

CloudbuildTriggerBuildOptionsVolumes.builder()
//  .name(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.name">name</a></code> | <code>java.lang.String</code> | Name of the volume to mount. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.path">path</a></code> | <code>java.lang.String</code> | Path at which to mount the volume. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the volume to mount.

Volume names must be unique per build step and must be valid names for Docker volumes.
Each named volume must be used by at least two build steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on the same
build step or with certain reserved volume paths.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#path CloudbuildTrigger#path}

---

### CloudbuildTriggerBuildSecret <a name="CloudbuildTriggerBuildSecret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildSecret;

CloudbuildTriggerBuildSecret.builder()
    .kmsKeyName(java.lang.String)
//  .secretEnv(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Cloud KMS key name to use to decrypt these envs. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.secretEnv">secretEnv</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of environment variable name to its encrypted value. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Cloud KMS key name to use to decrypt these envs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#kms_key_name CloudbuildTrigger#kms_key_name}

---

##### `secretEnv`<sup>Optional</sup> <a name="secretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.secretEnv"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecretEnv();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of environment variable name to its encrypted value.

Secret environment variables must be unique across all of a build's secrets,
and must be used by at least one build step. Values can be at most 64 KB in size.
There can be at most 100 secret values across all of a build's secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}

---

### CloudbuildTriggerBuildSource <a name="CloudbuildTriggerBuildSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildSource;

CloudbuildTriggerBuildSource.builder()
//  .repoSource(CloudbuildTriggerBuildSourceRepoSource)
//  .storageSource(CloudbuildTriggerBuildSourceStorageSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.repoSource">repoSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a></code> | repo_source block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.storageSource">storageSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a></code> | storage_source block. |

---

##### `repoSource`<sup>Optional</sup> <a name="repoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.repoSource"></a>

```java
public CloudbuildTriggerBuildSourceRepoSource getRepoSource();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

repo_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#repo_source CloudbuildTrigger#repo_source}

---

##### `storageSource`<sup>Optional</sup> <a name="storageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.storageSource"></a>

```java
public CloudbuildTriggerBuildSourceStorageSource getStorageSource();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

storage_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#storage_source CloudbuildTrigger#storage_source}

---

### CloudbuildTriggerBuildSourceRepoSource <a name="CloudbuildTriggerBuildSourceRepoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildSourceRepoSource;

CloudbuildTriggerBuildSourceRepoSource.builder()
    .repoName(java.lang.String)
//  .branchName(java.lang.String)
//  .commitSha(java.lang.String)
//  .dir(java.lang.String)
//  .invertRegex(java.lang.Boolean)
//  .invertRegex(IResolvable)
//  .projectId(java.lang.String)
//  .substitutions(java.util.Map<java.lang.String, java.lang.String>)
//  .tagName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.repoName">repoName</a></code> | <code>java.lang.String</code> | Name of the Cloud Source Repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.branchName">branchName</a></code> | <code>java.lang.String</code> | Regex matching branches to build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.dir">dir</a></code> | <code>java.lang.String</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Only trigger a build if the revision regex does NOT match the revision regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.projectId">projectId</a></code> | <code>java.lang.String</code> | ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.substitutions">substitutions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Substitutions to use in a triggered build. Should only be used with triggers.run. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.tagName">tagName</a></code> | <code>java.lang.String</code> | Regex matching tags to build. |

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.repoName"></a>

```java
public java.lang.String getRepoName();
```

- *Type:* java.lang.String

Name of the Cloud Source Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#repo_name CloudbuildTrigger#repo_name}

---

##### `branchName`<sup>Optional</sup> <a name="branchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

Regex matching branches to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#branch_name CloudbuildTrigger#branch_name}

---

##### `commitSha`<sup>Optional</sup> <a name="commitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#commit_sha CloudbuildTrigger#commit_sha}

---

##### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and is an absolute path,
this value is ignored for that step's execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#dir CloudbuildTrigger#dir}

---

##### `invertRegex`<sup>Optional</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#project_id CloudbuildTrigger#project_id}

---

##### `substitutions`<sup>Optional</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.substitutions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSubstitutions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Substitutions to use in a triggered build. Should only be used with triggers.run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

##### `tagName`<sup>Optional</sup> <a name="tagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

Regex matching tags to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#tag_name CloudbuildTrigger#tag_name}

---

### CloudbuildTriggerBuildSourceStorageSource <a name="CloudbuildTriggerBuildSourceStorageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildSourceStorageSource;

CloudbuildTriggerBuildSourceStorageSource.builder()
    .bucket(java.lang.String)
    .object(java.lang.String)
//  .generation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Google Cloud Storage bucket containing the source. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.object">object</a></code> | <code>java.lang.String</code> | Google Cloud Storage object containing the source. This object must be a gzipped archive file (.tar.gz) containing source to build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.generation">generation</a></code> | <code>java.lang.String</code> | Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Google Cloud Storage bucket containing the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#bucket CloudbuildTrigger#bucket}

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Google Cloud Storage object containing the source. This object must be a gzipped archive file (.tar.gz) containing source to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#object CloudbuildTrigger#object}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#generation CloudbuildTrigger#generation}

---

### CloudbuildTriggerBuildStep <a name="CloudbuildTriggerBuildStep" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildStep;

CloudbuildTriggerBuildStep.builder()
    .name(java.lang.String)
//  .allowExitCodes(java.util.List<java.lang.Number>)
//  .allowFailure(java.lang.Boolean)
//  .allowFailure(IResolvable)
//  .args(java.util.List<java.lang.String>)
//  .dir(java.lang.String)
//  .entrypoint(java.lang.String)
//  .env(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .script(java.lang.String)
//  .secretEnv(java.util.List<java.lang.String>)
//  .timeout(java.lang.String)
//  .timing(java.lang.String)
//  .volumes(IResolvable)
//  .volumes(java.util.List<CloudbuildTriggerBuildStepVolumes>)
//  .waitFor(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.name">name</a></code> | <code>java.lang.String</code> | The name of the container image that will run this particular build step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.allowExitCodes">allowExitCodes</a></code> | <code>java.util.List<java.lang.Number></code> | Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.allowFailure">allowFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow this build step to fail without failing the entire build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | A list of arguments that will be presented to the step when it is started. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.dir">dir</a></code> | <code>java.lang.String</code> | Working directory to use when running this step's container. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.entrypoint">entrypoint</a></code> | <code>java.lang.String</code> | Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.env">env</a></code> | <code>java.util.List<java.lang.String></code> | A list of environment variable definitions to be used when running a step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for this build step, used in 'wait_for' to reference this build step as a dependency. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.script">script</a></code> | <code>java.lang.String</code> | A shell script to be executed in the step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.secretEnv">secretEnv</a></code> | <code>java.util.List<java.lang.String></code> | A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Time limit for executing this build step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timing">timing</a></code> | <code>java.lang.String</code> | Output only. Stores timing information for executing this build step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.volumes">volumes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>></code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.waitFor">waitFor</a></code> | <code>java.util.List<java.lang.String></code> | The ID(s) of the step(s) that this build step depends on. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the container image that will run this particular build step.

If the image is available in the host's Docker daemon's cache, it will be
run directly. If not, the host will attempt to pull the image first, using
the builder service account's credentials if necessary.

The Docker daemon's cache will already have the latest versions of all of
the officially supported build steps (see https://github.com/GoogleCloudPlatform/cloud-builders
for images and examples).
The Docker daemon will also have cached many of the layers for some popular
images, like "ubuntu", "debian", but they will be refreshed at the time
you attempt to use them.

If you built an image in a previous build step, it will be stored in the
host's Docker daemon's cache and is available to use as the name for a
later build step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `allowExitCodes`<sup>Optional</sup> <a name="allowExitCodes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.allowExitCodes"></a>

```java
public java.util.List<java.lang.Number> getAllowExitCodes();
```

- *Type:* java.util.List<java.lang.Number>

Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes.

If 'allowFailure' is also specified, this field will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#allow_exit_codes CloudbuildTrigger#allow_exit_codes}

---

##### `allowFailure`<sup>Optional</sup> <a name="allowFailure" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.allowFailure"></a>

```java
public java.lang.Object getAllowFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow this build step to fail without failing the entire build.

If false, the entire build will fail if this step fails. Otherwise, the
build will succeed, but this step will still have a failure status.
Error information will be reported in the 'failureDetail' field.

'allowExitCodes' takes precedence over this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#allow_failure CloudbuildTrigger#allow_failure}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

A list of arguments that will be presented to the step when it is started.

If the image used to run the step's container has an entrypoint, the args
are used as arguments to that entrypoint. If the image does not define an
entrypoint, the first element in args is used as the entrypoint, and the
remainder will be used as arguments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#args CloudbuildTrigger#args}

---

##### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

Working directory to use when running this step's container.

If this value is a relative path, it is relative to the build's working
directory. If this value is absolute, it may be outside the build's working
directory, in which case the contents of the path may not be persisted
across build step executions, unless a 'volume' for that path is specified.

If the build specifies a 'RepoSource' with 'dir' and a step with a
'dir',
which specifies an absolute path, the 'RepoSource' 'dir' is ignored
for the step's execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#dir CloudbuildTrigger#dir}

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.entrypoint"></a>

```java
public java.lang.String getEntrypoint();
```

- *Type:* java.lang.String

Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#entrypoint CloudbuildTrigger#entrypoint}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.env"></a>

```java
public java.util.List<java.lang.String> getEnv();
```

- *Type:* java.util.List<java.lang.String>

A list of environment variable definitions to be used when running a step.

The elements are of the form "KEY=VALUE" for the environment variable
"KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#env CloudbuildTrigger#env}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for this build step, used in 'wait_for' to reference this build step as a dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#id CloudbuildTrigger#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

A shell script to be executed in the step.

When script is provided, the user cannot specify the entrypoint or args.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#script CloudbuildTrigger#script}

---

##### `secretEnv`<sup>Optional</sup> <a name="secretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.secretEnv"></a>

```java
public java.util.List<java.lang.String> getSecretEnv();
```

- *Type:* java.util.List<java.lang.String>

A list of environment variables which are encrypted using a Cloud Key Management Service crypto key.

These values must be specified in
the build's 'Secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Time limit for executing this build step.

If not defined,
the step has no
time limit and will be allowed to continue to run until either it
completes or the build itself times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#timeout CloudbuildTrigger#timeout}

---

##### `timing`<sup>Optional</sup> <a name="timing" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timing"></a>

```java
public java.lang.String getTiming();
```

- *Type:* java.lang.String

Output only. Stores timing information for executing this build step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#timing CloudbuildTrigger#timing}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.volumes"></a>

```java
public java.lang.Object getVolumes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#volumes CloudbuildTrigger#volumes}

---

##### `waitFor`<sup>Optional</sup> <a name="waitFor" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.waitFor"></a>

```java
public java.util.List<java.lang.String> getWaitFor();
```

- *Type:* java.util.List<java.lang.String>

The ID(s) of the step(s) that this build step depends on.

This build step will not start until all the build steps in 'wait_for'
have completed successfully. If 'wait_for' is empty, this build step
will start when all previous build steps in the 'Build.Steps' list
have completed successfully.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#wait_for CloudbuildTrigger#wait_for}

---

### CloudbuildTriggerBuildStepVolumes <a name="CloudbuildTriggerBuildStepVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildStepVolumes;

CloudbuildTriggerBuildStepVolumes.builder()
    .name(java.lang.String)
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.name">name</a></code> | <code>java.lang.String</code> | Name of the volume to mount. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.path">path</a></code> | <code>java.lang.String</code> | Path at which to mount the volume. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the volume to mount.

Volume names must be unique per build step and must be valid names for
Docker volumes. Each named volume must be used by at least two build steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on
the same build step or with certain reserved volume paths.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#path CloudbuildTrigger#path}

---

### CloudbuildTriggerConfig <a name="CloudbuildTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerConfig;

CloudbuildTriggerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .approvalConfig(CloudbuildTriggerApprovalConfig)
//  .bitbucketServerTriggerConfig(CloudbuildTriggerBitbucketServerTriggerConfig)
//  .buildAttribute(CloudbuildTriggerBuild)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .filename(java.lang.String)
//  .filter(java.lang.String)
//  .gitFileSource(CloudbuildTriggerGitFileSource)
//  .github(CloudbuildTriggerGithub)
//  .id(java.lang.String)
//  .ignoredFiles(java.util.List<java.lang.String>)
//  .includeBuildLogs(java.lang.String)
//  .includedFiles(java.util.List<java.lang.String>)
//  .location(java.lang.String)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .pubsubConfig(CloudbuildTriggerPubsubConfig)
//  .repositoryEventConfig(CloudbuildTriggerRepositoryEventConfig)
//  .serviceAccount(java.lang.String)
//  .sourceToBuild(CloudbuildTriggerSourceToBuild)
//  .substitutions(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(CloudbuildTriggerTimeouts)
//  .triggerTemplate(CloudbuildTriggerTriggerTemplate)
//  .webhookConfig(CloudbuildTriggerWebhookConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.approvalConfig">approvalConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a></code> | approval_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.bitbucketServerTriggerConfig">bitbucketServerTriggerConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a></code> | bitbucket_server_trigger_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.buildAttribute">buildAttribute</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a></code> | build block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the trigger. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the trigger is disabled or not. If true, the trigger will never result in a build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filename">filename</a></code> | <code>java.lang.String</code> | Path, from the source root, to a file whose contents is used for the template. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | A Common Expression Language string. Used only with Pub/Sub and Webhook. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.gitFileSource">gitFileSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a></code> | git_file_source block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.github">github</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a></code> | github block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#id CloudbuildTrigger#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.ignoredFiles">ignoredFiles</a></code> | <code>java.util.List<java.lang.String></code> | ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includeBuildLogs">includeBuildLogs</a></code> | <code>java.lang.String</code> | Build logs will be sent back to GitHub as part of the checkrun result. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includedFiles">includedFiles</a></code> | <code>java.util.List<java.lang.String></code> | ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.location">location</a></code> | <code>java.lang.String</code> | The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the trigger. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#project CloudbuildTrigger#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.pubsubConfig">pubsubConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a></code> | pubsub_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.repositoryEventConfig">repositoryEventConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a></code> | repository_event_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.sourceToBuild">sourceToBuild</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a></code> | source_to_build block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.substitutions">substitutions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Substitutions data for Build resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags for annotation of a BuildTrigger. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.triggerTemplate">triggerTemplate</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a></code> | trigger_template block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.webhookConfig">webhookConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a></code> | webhook_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approvalConfig`<sup>Optional</sup> <a name="approvalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.approvalConfig"></a>

```java
public CloudbuildTriggerApprovalConfig getApprovalConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

approval_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#approval_config CloudbuildTrigger#approval_config}

---

##### `bitbucketServerTriggerConfig`<sup>Optional</sup> <a name="bitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.bitbucketServerTriggerConfig"></a>

```java
public CloudbuildTriggerBitbucketServerTriggerConfig getBitbucketServerTriggerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a>

bitbucket_server_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#bitbucket_server_trigger_config CloudbuildTrigger#bitbucket_server_trigger_config}

---

##### `buildAttribute`<sup>Optional</sup> <a name="buildAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.buildAttribute"></a>

```java
public CloudbuildTriggerBuild getBuildAttribute();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

build block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#build CloudbuildTrigger#build}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#description CloudbuildTrigger#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the trigger is disabled or not. If true, the trigger will never result in a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#disabled CloudbuildTrigger#disabled}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

Path, from the source root, to a file whose contents is used for the template.

Either a filename or build template must be provided. Set this only when using trigger_template or github.
When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#filename CloudbuildTrigger#filename}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

A Common Expression Language string. Used only with Pub/Sub and Webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#filter CloudbuildTrigger#filter}

---

##### `gitFileSource`<sup>Optional</sup> <a name="gitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.gitFileSource"></a>

```java
public CloudbuildTriggerGitFileSource getGitFileSource();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

git_file_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#git_file_source CloudbuildTrigger#git_file_source}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.github"></a>

```java
public CloudbuildTriggerGithub getGithub();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#github CloudbuildTrigger#github}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#id CloudbuildTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoredFiles`<sup>Optional</sup> <a name="ignoredFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.ignoredFiles"></a>

```java
public java.util.List<java.lang.String> getIgnoredFiles();
```

- *Type:* java.util.List<java.lang.String>

ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'.

If ignoredFiles and changed files are both empty, then they are not
used to determine whether or not to trigger a build.

If ignoredFiles is not empty, then we ignore any files that match any
of the ignored_file globs. If the change has no files that are outside
of the ignoredFiles globs, then we do not trigger a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#ignored_files CloudbuildTrigger#ignored_files}

---

##### `includeBuildLogs`<sup>Optional</sup> <a name="includeBuildLogs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includeBuildLogs"></a>

```java
public java.lang.String getIncludeBuildLogs();
```

- *Type:* java.lang.String

Build logs will be sent back to GitHub as part of the checkrun result.

Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or
INCLUDE_BUILD_LOGS_WITH_STATUS Possible values: ["INCLUDE_BUILD_LOGS_UNSPECIFIED", "INCLUDE_BUILD_LOGS_WITH_STATUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#include_build_logs CloudbuildTrigger#include_build_logs}

---

##### `includedFiles`<sup>Optional</sup> <a name="includedFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includedFiles"></a>

```java
public java.util.List<java.lang.String> getIncludedFiles();
```

- *Type:* java.util.List<java.lang.String>

ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is empty, then as far as this filter is concerned, we
should trigger the build.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is not empty, then we make sure that at least one of
those files matches a includedFiles glob. If not, then we do not trigger
a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#included_files CloudbuildTrigger#included_files}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#location CloudbuildTrigger#location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the trigger. Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#project CloudbuildTrigger#project}.

---

##### `pubsubConfig`<sup>Optional</sup> <a name="pubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.pubsubConfig"></a>

```java
public CloudbuildTriggerPubsubConfig getPubsubConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

pubsub_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#pubsub_config CloudbuildTrigger#pubsub_config}

---

##### `repositoryEventConfig`<sup>Optional</sup> <a name="repositoryEventConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.repositoryEventConfig"></a>

```java
public CloudbuildTriggerRepositoryEventConfig getRepositoryEventConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a>

repository_event_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#repository_event_config CloudbuildTrigger#repository_event_config}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel.

If no service account is set, then the standard Cloud Build service account
([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.

Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#service_account CloudbuildTrigger#service_account}

---

##### `sourceToBuild`<sup>Optional</sup> <a name="sourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.sourceToBuild"></a>

```java
public CloudbuildTriggerSourceToBuild getSourceToBuild();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

source_to_build block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#source_to_build CloudbuildTrigger#source_to_build}

---

##### `substitutions`<sup>Optional</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.substitutions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSubstitutions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Substitutions data for Build resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags for annotation of a BuildTrigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#tags CloudbuildTrigger#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.timeouts"></a>

```java
public CloudbuildTriggerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#timeouts CloudbuildTrigger#timeouts}

---

##### `triggerTemplate`<sup>Optional</sup> <a name="triggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.triggerTemplate"></a>

```java
public CloudbuildTriggerTriggerTemplate getTriggerTemplate();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

trigger_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#trigger_template CloudbuildTrigger#trigger_template}

---

##### `webhookConfig`<sup>Optional</sup> <a name="webhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.webhookConfig"></a>

```java
public CloudbuildTriggerWebhookConfig getWebhookConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

webhook_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#webhook_config CloudbuildTrigger#webhook_config}

---

### CloudbuildTriggerGitFileSource <a name="CloudbuildTriggerGitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerGitFileSource;

CloudbuildTriggerGitFileSource.builder()
    .path(java.lang.String)
    .repoType(java.lang.String)
//  .bitbucketServerConfig(java.lang.String)
//  .githubEnterpriseConfig(java.lang.String)
//  .repository(java.lang.String)
//  .revision(java.lang.String)
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.path">path</a></code> | <code>java.lang.String</code> | The path of the file, with the repo root as the root of the path. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.repoType">repoType</a></code> | <code>java.lang.String</code> | The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.bitbucketServerConfig">bitbucketServerConfig</a></code> | <code>java.lang.String</code> | The full resource name of the bitbucket server config. Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code>java.lang.String</code> | The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.repository">repository</a></code> | <code>java.lang.String</code> | The fully qualified resource name of the Repo API repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.revision">revision</a></code> | <code>java.lang.String</code> | The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the filename (optional). |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.uri">uri</a></code> | <code>java.lang.String</code> | The URI of the repo (optional). |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path of the file, with the repo root as the root of the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#path CloudbuildTrigger#path}

---

##### `repoType`<sup>Required</sup> <a name="repoType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.repoType"></a>

```java
public java.lang.String getRepoType();
```

- *Type:* java.lang.String

The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#repo_type CloudbuildTrigger#repo_type}

---

##### `bitbucketServerConfig`<sup>Optional</sup> <a name="bitbucketServerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.bitbucketServerConfig"></a>

```java
public java.lang.String getBitbucketServerConfig();
```

- *Type:* java.lang.String

The full resource name of the bitbucket server config. Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#bitbucket_server_config CloudbuildTrigger#bitbucket_server_config}

---

##### `githubEnterpriseConfig`<sup>Optional</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.githubEnterpriseConfig"></a>

```java
public java.lang.String getGithubEnterpriseConfig();
```

- *Type:* java.lang.String

The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#github_enterprise_config CloudbuildTrigger#github_enterprise_config}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The fully qualified resource name of the Repo API repository.

The fully qualified resource name of the Repo API repository.
If unspecified, the repo from which the trigger invocation originated is assumed to be the repo from which to read the specified path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#repository CloudbuildTrigger#repository}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the filename (optional).

This field respects the same syntax/resolution as described here: https://git-scm.com/docs/gitrevisions
If unspecified, the revision from which the trigger invocation originated is assumed to be the revision from which to read the specified path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#revision CloudbuildTrigger#revision}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The URI of the repo (optional).

If unspecified, the repo from which the trigger
invocation originated is assumed to be the repo from which to read the specified path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#uri CloudbuildTrigger#uri}

---

### CloudbuildTriggerGithub <a name="CloudbuildTriggerGithub" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerGithub;

CloudbuildTriggerGithub.builder()
//  .enterpriseConfigResourceName(java.lang.String)
//  .name(java.lang.String)
//  .owner(java.lang.String)
//  .pullRequest(CloudbuildTriggerGithubPullRequest)
//  .push(CloudbuildTriggerGithubPush)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.enterpriseConfigResourceName">enterpriseConfigResourceName</a></code> | <code>java.lang.String</code> | The resource name of the github enterprise config that should be applied to this installation. For example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.name">name</a></code> | <code>java.lang.String</code> | Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.owner">owner</a></code> | <code>java.lang.String</code> | Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.push">push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a></code> | push block. |

---

##### `enterpriseConfigResourceName`<sup>Optional</sup> <a name="enterpriseConfigResourceName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.enterpriseConfigResourceName"></a>

```java
public java.lang.String getEnterpriseConfigResourceName();
```

- *Type:* java.lang.String

The resource name of the github enterprise config that should be applied to this installation. For example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#enterprise_config_resource_name CloudbuildTrigger#enterprise_config_resource_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#owner CloudbuildTrigger#owner}

---

##### `pullRequest`<sup>Optional</sup> <a name="pullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.pullRequest"></a>

```java
public CloudbuildTriggerGithubPullRequest getPullRequest();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#pull_request CloudbuildTrigger#pull_request}

---

##### `push`<sup>Optional</sup> <a name="push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.push"></a>

```java
public CloudbuildTriggerGithubPush getPush();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#push CloudbuildTrigger#push}

---

### CloudbuildTriggerGithubPullRequest <a name="CloudbuildTriggerGithubPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerGithubPullRequest;

CloudbuildTriggerGithubPullRequest.builder()
    .branch(java.lang.String)
//  .commentControl(java.lang.String)
//  .invertRegex(java.lang.Boolean)
//  .invertRegex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.branch">branch</a></code> | <code>java.lang.String</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.commentControl">commentControl</a></code> | <code>java.lang.String</code> | Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, branches that do NOT match the git_ref will trigger a build. |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Regex of branches to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `commentControl`<sup>Optional</sup> <a name="commentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.commentControl"></a>

```java
public java.lang.String getCommentControl();
```

- *Type:* java.lang.String

Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#comment_control CloudbuildTrigger#comment_control}

---

##### `invertRegex`<sup>Optional</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, branches that do NOT match the git_ref will trigger a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

### CloudbuildTriggerGithubPush <a name="CloudbuildTriggerGithubPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerGithubPush;

CloudbuildTriggerGithubPush.builder()
//  .branch(java.lang.String)
//  .invertRegex(java.lang.Boolean)
//  .invertRegex(IResolvable)
//  .tag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.branch">branch</a></code> | <code>java.lang.String</code> | Regex of branches to match.  Specify only one of branch or tag. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, only trigger a build if the revision regex does NOT match the git_ref regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.tag">tag</a></code> | <code>java.lang.String</code> | Regex of tags to match.  Specify only one of branch or tag. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Regex of branches to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `invertRegex`<sup>Optional</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, only trigger a build if the revision regex does NOT match the git_ref regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

Regex of tags to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#tag CloudbuildTrigger#tag}

---

### CloudbuildTriggerPubsubConfig <a name="CloudbuildTriggerPubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerPubsubConfig;

CloudbuildTriggerPubsubConfig.builder()
    .topic(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.topic">topic</a></code> | <code>java.lang.String</code> | The name of the topic from which this subscription is receiving messages. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Service account that will make the push request. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

The name of the topic from which this subscription is receiving messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#topic CloudbuildTrigger#topic}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Service account that will make the push request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#service_account_email CloudbuildTrigger#service_account_email}

---

### CloudbuildTriggerRepositoryEventConfig <a name="CloudbuildTriggerRepositoryEventConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerRepositoryEventConfig;

CloudbuildTriggerRepositoryEventConfig.builder()
//  .pullRequest(CloudbuildTriggerRepositoryEventConfigPullRequest)
//  .push(CloudbuildTriggerRepositoryEventConfigPush)
//  .repository(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest">CloudbuildTriggerRepositoryEventConfigPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig.property.push">push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush">CloudbuildTriggerRepositoryEventConfigPush</a></code> | push block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | The resource name of the Repo API resource. |

---

##### `pullRequest`<sup>Optional</sup> <a name="pullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig.property.pullRequest"></a>

```java
public CloudbuildTriggerRepositoryEventConfigPullRequest getPullRequest();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest">CloudbuildTriggerRepositoryEventConfigPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#pull_request CloudbuildTrigger#pull_request}

---

##### `push`<sup>Optional</sup> <a name="push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig.property.push"></a>

```java
public CloudbuildTriggerRepositoryEventConfigPush getPush();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush">CloudbuildTriggerRepositoryEventConfigPush</a>

push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#push CloudbuildTrigger#push}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The resource name of the Repo API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#repository CloudbuildTrigger#repository}

---

### CloudbuildTriggerRepositoryEventConfigPullRequest <a name="CloudbuildTriggerRepositoryEventConfigPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerRepositoryEventConfigPullRequest;

CloudbuildTriggerRepositoryEventConfigPullRequest.builder()
//  .branch(java.lang.String)
//  .commentControl(java.lang.String)
//  .invertRegex(java.lang.Boolean)
//  .invertRegex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest.property.branch">branch</a></code> | <code>java.lang.String</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest.property.commentControl">commentControl</a></code> | <code>java.lang.String</code> | Configure builds to run whether a repository owner or collaborator need to comment '/gcbrun'. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, branches that do NOT match the git_ref will trigger a build. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Regex of branches to match.

The syntax of the regular expressions accepted is the syntax accepted by
RE2 and described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `commentControl`<sup>Optional</sup> <a name="commentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest.property.commentControl"></a>

```java
public java.lang.String getCommentControl();
```

- *Type:* java.lang.String

Configure builds to run whether a repository owner or collaborator need to comment '/gcbrun'. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#comment_control CloudbuildTrigger#comment_control}

---

##### `invertRegex`<sup>Optional</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, branches that do NOT match the git_ref will trigger a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

### CloudbuildTriggerRepositoryEventConfigPush <a name="CloudbuildTriggerRepositoryEventConfigPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerRepositoryEventConfigPush;

CloudbuildTriggerRepositoryEventConfigPush.builder()
//  .branch(java.lang.String)
//  .invertRegex(java.lang.Boolean)
//  .invertRegex(IResolvable)
//  .tag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush.property.branch">branch</a></code> | <code>java.lang.String</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, only trigger a build if the revision regex does NOT match the git_ref regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush.property.tag">tag</a></code> | <code>java.lang.String</code> | Regex of tags to match. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Regex of branches to match.

The syntax of the regular expressions accepted is the syntax accepted by
RE2 and described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `invertRegex`<sup>Optional</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, only trigger a build if the revision regex does NOT match the git_ref regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

Regex of tags to match.

The syntax of the regular expressions accepted is the syntax accepted by
RE2 and described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#tag CloudbuildTrigger#tag}

---

### CloudbuildTriggerSourceToBuild <a name="CloudbuildTriggerSourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerSourceToBuild;

CloudbuildTriggerSourceToBuild.builder()
    .ref(java.lang.String)
    .repoType(java.lang.String)
//  .bitbucketServerConfig(java.lang.String)
//  .githubEnterpriseConfig(java.lang.String)
//  .repository(java.lang.String)
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.ref">ref</a></code> | <code>java.lang.String</code> | The branch or tag to use. Must start with "refs/" (required). |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.repoType">repoType</a></code> | <code>java.lang.String</code> | The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.bitbucketServerConfig">bitbucketServerConfig</a></code> | <code>java.lang.String</code> | The full resource name of the bitbucket server config. Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code>java.lang.String</code> | The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.repository">repository</a></code> | <code>java.lang.String</code> | The qualified resource name of the Repo API repository. Either uri or repository can be specified and is required. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.uri">uri</a></code> | <code>java.lang.String</code> | The URI of the repo. |

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

The branch or tag to use. Must start with "refs/" (required).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#ref CloudbuildTrigger#ref}

---

##### `repoType`<sup>Required</sup> <a name="repoType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.repoType"></a>

```java
public java.lang.String getRepoType();
```

- *Type:* java.lang.String

The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#repo_type CloudbuildTrigger#repo_type}

---

##### `bitbucketServerConfig`<sup>Optional</sup> <a name="bitbucketServerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.bitbucketServerConfig"></a>

```java
public java.lang.String getBitbucketServerConfig();
```

- *Type:* java.lang.String

The full resource name of the bitbucket server config. Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#bitbucket_server_config CloudbuildTrigger#bitbucket_server_config}

---

##### `githubEnterpriseConfig`<sup>Optional</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.githubEnterpriseConfig"></a>

```java
public java.lang.String getGithubEnterpriseConfig();
```

- *Type:* java.lang.String

The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#github_enterprise_config CloudbuildTrigger#github_enterprise_config}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The qualified resource name of the Repo API repository. Either uri or repository can be specified and is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#repository CloudbuildTrigger#repository}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The URI of the repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#uri CloudbuildTrigger#uri}

---

### CloudbuildTriggerTimeouts <a name="CloudbuildTriggerTimeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerTimeouts;

CloudbuildTriggerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#create CloudbuildTrigger#create}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#delete CloudbuildTrigger#delete}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#update CloudbuildTrigger#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#create CloudbuildTrigger#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#delete CloudbuildTrigger#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#update CloudbuildTrigger#update}.

---

### CloudbuildTriggerTriggerTemplate <a name="CloudbuildTriggerTriggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerTriggerTemplate;

CloudbuildTriggerTriggerTemplate.builder()
//  .branchName(java.lang.String)
//  .commitSha(java.lang.String)
//  .dir(java.lang.String)
//  .invertRegex(java.lang.Boolean)
//  .invertRegex(IResolvable)
//  .projectId(java.lang.String)
//  .repoName(java.lang.String)
//  .tagName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.branchName">branchName</a></code> | <code>java.lang.String</code> | Name of the branch to build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.dir">dir</a></code> | <code>java.lang.String</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Only trigger a build if the revision regex does NOT match the revision regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.projectId">projectId</a></code> | <code>java.lang.String</code> | ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.repoName">repoName</a></code> | <code>java.lang.String</code> | Name of the Cloud Source Repository. If omitted, the name "default" is assumed. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.tagName">tagName</a></code> | <code>java.lang.String</code> | Name of the tag to build. |

---

##### `branchName`<sup>Optional</sup> <a name="branchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

Name of the branch to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
This field is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#branch_name CloudbuildTrigger#branch_name}

---

##### `commitSha`<sup>Optional</sup> <a name="commitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#commit_sha CloudbuildTrigger#commit_sha}

---

##### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and
is an absolute path, this value is ignored for that step's
execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#dir CloudbuildTrigger#dir}

---

##### `invertRegex`<sup>Optional</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#project_id CloudbuildTrigger#project_id}

---

##### `repoName`<sup>Optional</sup> <a name="repoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.repoName"></a>

```java
public java.lang.String getRepoName();
```

- *Type:* java.lang.String

Name of the Cloud Source Repository. If omitted, the name "default" is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#repo_name CloudbuildTrigger#repo_name}

---

##### `tagName`<sup>Optional</sup> <a name="tagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

Name of the tag to build.

Exactly one of a branch name, tag, or commit SHA must be provided.
This field is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#tag_name CloudbuildTrigger#tag_name}

---

### CloudbuildTriggerWebhookConfig <a name="CloudbuildTriggerWebhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerWebhookConfig;

CloudbuildTriggerWebhookConfig.builder()
    .secret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig.property.secret">secret</a></code> | <code>java.lang.String</code> | Resource name for the secret required as a URL parameter. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

Resource name for the secret required as a URL parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/cloudbuild_trigger#secret CloudbuildTrigger#secret}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudbuildTriggerApprovalConfigOutputReference <a name="CloudbuildTriggerApprovalConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerApprovalConfigOutputReference;

new CloudbuildTriggerApprovalConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resetApprovalRequired">resetApprovalRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApprovalRequired` <a name="resetApprovalRequired" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resetApprovalRequired"></a>

```java
public void resetApprovalRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequiredInput">approvalRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired">approvalRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approvalRequiredInput`<sup>Optional</sup> <a name="approvalRequiredInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequiredInput"></a>

```java
public java.lang.Object getApprovalRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `approvalRequired`<sup>Required</sup> <a name="approvalRequired" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired"></a>

```java
public java.lang.Object getApprovalRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerApprovalConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

---


### CloudbuildTriggerBitbucketServerTriggerConfigOutputReference <a name="CloudbuildTriggerBitbucketServerTriggerConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference;

new CloudbuildTriggerBitbucketServerTriggerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPullRequest">putPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPush">putPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPullRequest">resetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPush">resetPush</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPullRequest` <a name="putPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPullRequest"></a>

```java
public void putPullRequest(CloudbuildTriggerBitbucketServerTriggerConfigPullRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---

##### `putPush` <a name="putPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPush"></a>

```java
public void putPush(CloudbuildTriggerBitbucketServerTriggerConfigPush value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPush.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---

##### `resetPullRequest` <a name="resetPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPullRequest"></a>

```java
public void resetPullRequest()
```

##### `resetPush` <a name="resetPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPush"></a>

```java
public void resetPush()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResourceInput">bitbucketServerConfigResourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKeyInput">projectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequestInput">pullRequestInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pushInput">pushInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlugInput">repoSlugInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResource">bitbucketServerConfigResource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlug">repoSlug</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequest"></a>

```java
public CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference getPullRequest();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.push"></a>

```java
public CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference getPush();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference</a>

---

##### `bitbucketServerConfigResourceInput`<sup>Optional</sup> <a name="bitbucketServerConfigResourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResourceInput"></a>

```java
public java.lang.String getBitbucketServerConfigResourceInput();
```

- *Type:* java.lang.String

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKeyInput"></a>

```java
public java.lang.String getProjectKeyInput();
```

- *Type:* java.lang.String

---

##### `pullRequestInput`<sup>Optional</sup> <a name="pullRequestInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequestInput"></a>

```java
public CloudbuildTriggerBitbucketServerTriggerConfigPullRequest getPullRequestInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---

##### `pushInput`<sup>Optional</sup> <a name="pushInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pushInput"></a>

```java
public CloudbuildTriggerBitbucketServerTriggerConfigPush getPushInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---

##### `repoSlugInput`<sup>Optional</sup> <a name="repoSlugInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlugInput"></a>

```java
public java.lang.String getRepoSlugInput();
```

- *Type:* java.lang.String

---

##### `bitbucketServerConfigResource`<sup>Required</sup> <a name="bitbucketServerConfigResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResource"></a>

```java
public java.lang.String getBitbucketServerConfigResource();
```

- *Type:* java.lang.String

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

---

##### `repoSlug`<sup>Required</sup> <a name="repoSlug" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlug"></a>

```java
public java.lang.String getRepoSlug();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerBitbucketServerTriggerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a>

---


### CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference <a name="CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference;

new CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetCommentControl">resetCommentControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetInvertRegex">resetInvertRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommentControl` <a name="resetCommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetCommentControl"></a>

```java
public void resetCommentControl()
```

##### `resetInvertRegex` <a name="resetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetInvertRegex"></a>

```java
public void resetInvertRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControlInput">commentControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegexInput">invertRegexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControl">commentControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `commentControlInput`<sup>Optional</sup> <a name="commentControlInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControlInput"></a>

```java
public java.lang.String getCommentControlInput();
```

- *Type:* java.lang.String

---

##### `invertRegexInput`<sup>Optional</sup> <a name="invertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegexInput"></a>

```java
public java.lang.Object getInvertRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `commentControl`<sup>Required</sup> <a name="commentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControl"></a>

```java
public java.lang.String getCommentControl();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerBitbucketServerTriggerConfigPullRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---


### CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference <a name="CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference;

new CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetInvertRegex">resetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetInvertRegex` <a name="resetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetInvertRegex"></a>

```java
public void resetInvertRegex()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetTag"></a>

```java
public void resetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegexInput">invertRegexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `invertRegexInput`<sup>Optional</sup> <a name="invertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegexInput"></a>

```java
public java.lang.Object getInvertRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerBitbucketServerTriggerConfigPush getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---


### CloudbuildTriggerBuildArtifactsMavenArtifactsList <a name="CloudbuildTriggerBuildArtifactsMavenArtifactsList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList;

new CloudbuildTriggerBuildArtifactsMavenArtifactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.get"></a>

```java
public CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts">CloudbuildTriggerBuildArtifactsMavenArtifacts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts">CloudbuildTriggerBuildArtifactsMavenArtifacts</a>>

---


### CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference <a name="CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference;

new CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetArtifactId">resetArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactId` <a name="resetArtifactId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetArtifactId"></a>

```java
public void resetArtifactId()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetRepository"></a>

```java
public void resetRepository()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactIdInput">artifactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactId">artifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts">CloudbuildTriggerBuildArtifactsMavenArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifactIdInput`<sup>Optional</sup> <a name="artifactIdInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactIdInput"></a>

```java
public java.lang.String getArtifactIdInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactId"></a>

```java
public java.lang.String getArtifactId();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts">CloudbuildTriggerBuildArtifactsMavenArtifacts</a>

---


### CloudbuildTriggerBuildArtifactsNpmPackagesList <a name="CloudbuildTriggerBuildArtifactsNpmPackagesList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsNpmPackagesList;

new CloudbuildTriggerBuildArtifactsNpmPackagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.get"></a>

```java
public CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages">CloudbuildTriggerBuildArtifactsNpmPackages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages">CloudbuildTriggerBuildArtifactsNpmPackages</a>>

---


### CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference <a name="CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference;

new CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resetPackagePath">resetPackagePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPackagePath` <a name="resetPackagePath" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resetPackagePath"></a>

```java
public void resetPackagePath()
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resetRepository"></a>

```java
public void resetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePathInput">packagePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePath">packagePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages">CloudbuildTriggerBuildArtifactsNpmPackages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packagePathInput`<sup>Optional</sup> <a name="packagePathInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePathInput"></a>

```java
public java.lang.String getPackagePathInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `packagePath`<sup>Required</sup> <a name="packagePath" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePath"></a>

```java
public java.lang.String getPackagePath();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages">CloudbuildTriggerBuildArtifactsNpmPackages</a>

---


### CloudbuildTriggerBuildArtifactsObjectsOutputReference <a name="CloudbuildTriggerBuildArtifactsObjectsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference;

new CloudbuildTriggerBuildArtifactsObjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetPaths">resetPaths</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetPaths` <a name="resetPaths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetPaths"></a>

```java
public void resetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing">timing</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList">CloudbuildTriggerBuildArtifactsObjectsTimingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.pathsInput">pathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timing`<sup>Required</sup> <a name="timing" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing"></a>

```java
public CloudbuildTriggerBuildArtifactsObjectsTimingList getTiming();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList">CloudbuildTriggerBuildArtifactsObjectsTimingList</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.pathsInput"></a>

```java
public java.util.List<java.lang.String> getPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerBuildArtifactsObjects getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

---


### CloudbuildTriggerBuildArtifactsObjectsTimingList <a name="CloudbuildTriggerBuildArtifactsObjectsTimingList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsObjectsTimingList;

new CloudbuildTriggerBuildArtifactsObjectsTimingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.get"></a>

```java
public CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference <a name="CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference;

new CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming">CloudbuildTriggerBuildArtifactsObjectsTiming</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerBuildArtifactsObjectsTiming getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming">CloudbuildTriggerBuildArtifactsObjectsTiming</a>

---


### CloudbuildTriggerBuildArtifactsOutputReference <a name="CloudbuildTriggerBuildArtifactsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsOutputReference;

new CloudbuildTriggerBuildArtifactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putMavenArtifacts">putMavenArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putNpmPackages">putNpmPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putObjects">putObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putPythonPackages">putPythonPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetImages">resetImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetMavenArtifacts">resetMavenArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetNpmPackages">resetNpmPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetObjects">resetObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetPythonPackages">resetPythonPackages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMavenArtifacts` <a name="putMavenArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putMavenArtifacts"></a>

```java
public void putMavenArtifacts(IResolvable OR java.util.List<CloudbuildTriggerBuildArtifactsMavenArtifacts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putMavenArtifacts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts">CloudbuildTriggerBuildArtifactsMavenArtifacts</a>>

---

##### `putNpmPackages` <a name="putNpmPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putNpmPackages"></a>

```java
public void putNpmPackages(IResolvable OR java.util.List<CloudbuildTriggerBuildArtifactsNpmPackages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putNpmPackages.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages">CloudbuildTriggerBuildArtifactsNpmPackages</a>>

---

##### `putObjects` <a name="putObjects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putObjects"></a>

```java
public void putObjects(CloudbuildTriggerBuildArtifactsObjects value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putObjects.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

---

##### `putPythonPackages` <a name="putPythonPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putPythonPackages"></a>

```java
public void putPythonPackages(IResolvable OR java.util.List<CloudbuildTriggerBuildArtifactsPythonPackages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putPythonPackages.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages">CloudbuildTriggerBuildArtifactsPythonPackages</a>>

---

##### `resetImages` <a name="resetImages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetImages"></a>

```java
public void resetImages()
```

##### `resetMavenArtifacts` <a name="resetMavenArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetMavenArtifacts"></a>

```java
public void resetMavenArtifacts()
```

##### `resetNpmPackages` <a name="resetNpmPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetNpmPackages"></a>

```java
public void resetNpmPackages()
```

##### `resetObjects` <a name="resetObjects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetObjects"></a>

```java
public void resetObjects()
```

##### `resetPythonPackages` <a name="resetPythonPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetPythonPackages"></a>

```java
public void resetPythonPackages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifacts">mavenArtifacts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList">CloudbuildTriggerBuildArtifactsMavenArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.npmPackages">npmPackages</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList">CloudbuildTriggerBuildArtifactsNpmPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objects">objects</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference">CloudbuildTriggerBuildArtifactsObjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackages">pythonPackages</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList">CloudbuildTriggerBuildArtifactsPythonPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.imagesInput">imagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifactsInput">mavenArtifactsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts">CloudbuildTriggerBuildArtifactsMavenArtifacts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.npmPackagesInput">npmPackagesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages">CloudbuildTriggerBuildArtifactsNpmPackages</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objectsInput">objectsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackagesInput">pythonPackagesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages">CloudbuildTriggerBuildArtifactsPythonPackages</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.images">images</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mavenArtifacts`<sup>Required</sup> <a name="mavenArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifacts"></a>

```java
public CloudbuildTriggerBuildArtifactsMavenArtifactsList getMavenArtifacts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList">CloudbuildTriggerBuildArtifactsMavenArtifactsList</a>

---

##### `npmPackages`<sup>Required</sup> <a name="npmPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.npmPackages"></a>

```java
public CloudbuildTriggerBuildArtifactsNpmPackagesList getNpmPackages();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList">CloudbuildTriggerBuildArtifactsNpmPackagesList</a>

---

##### `objects`<sup>Required</sup> <a name="objects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objects"></a>

```java
public CloudbuildTriggerBuildArtifactsObjectsOutputReference getObjects();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference">CloudbuildTriggerBuildArtifactsObjectsOutputReference</a>

---

##### `pythonPackages`<sup>Required</sup> <a name="pythonPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackages"></a>

```java
public CloudbuildTriggerBuildArtifactsPythonPackagesList getPythonPackages();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList">CloudbuildTriggerBuildArtifactsPythonPackagesList</a>

---

##### `imagesInput`<sup>Optional</sup> <a name="imagesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.imagesInput"></a>

```java
public java.util.List<java.lang.String> getImagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mavenArtifactsInput`<sup>Optional</sup> <a name="mavenArtifactsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifactsInput"></a>

```java
public java.lang.Object getMavenArtifactsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts">CloudbuildTriggerBuildArtifactsMavenArtifacts</a>>

---

##### `npmPackagesInput`<sup>Optional</sup> <a name="npmPackagesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.npmPackagesInput"></a>

```java
public java.lang.Object getNpmPackagesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages">CloudbuildTriggerBuildArtifactsNpmPackages</a>>

---

##### `objectsInput`<sup>Optional</sup> <a name="objectsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objectsInput"></a>

```java
public CloudbuildTriggerBuildArtifactsObjects getObjectsInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

---

##### `pythonPackagesInput`<sup>Optional</sup> <a name="pythonPackagesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackagesInput"></a>

```java
public java.lang.Object getPythonPackagesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages">CloudbuildTriggerBuildArtifactsPythonPackages</a>>

---

##### `images`<sup>Required</sup> <a name="images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.images"></a>

```java
public java.util.List<java.lang.String> getImages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerBuildArtifacts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

---


### CloudbuildTriggerBuildArtifactsPythonPackagesList <a name="CloudbuildTriggerBuildArtifactsPythonPackagesList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsPythonPackagesList;

new CloudbuildTriggerBuildArtifactsPythonPackagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.get"></a>

```java
public CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages">CloudbuildTriggerBuildArtifactsPythonPackages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages">CloudbuildTriggerBuildArtifactsPythonPackages</a>>

---


### CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference <a name="CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference;

new CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resetPaths">resetPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPaths` <a name="resetPaths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resetPaths"></a>

```java
public void resetPaths()
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resetRepository"></a>

```java
public void resetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.pathsInput">pathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages">CloudbuildTriggerBuildArtifactsPythonPackages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.pathsInput"></a>

```java
public java.util.List<java.lang.String> getPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages">CloudbuildTriggerBuildArtifactsPythonPackages</a>

---


### CloudbuildTriggerBuildAvailableSecretsOutputReference <a name="CloudbuildTriggerBuildAvailableSecretsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildAvailableSecretsOutputReference;

new CloudbuildTriggerBuildAvailableSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager">putSecretManager</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretManager` <a name="putSecretManager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager"></a>

```java
public void putSecretManager(IResolvable OR java.util.List<CloudbuildTriggerBuildAvailableSecretsSecretManager> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager">secretManager</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList">CloudbuildTriggerBuildAvailableSecretsSecretManagerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManagerInput">secretManagerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretManager`<sup>Required</sup> <a name="secretManager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager"></a>

```java
public CloudbuildTriggerBuildAvailableSecretsSecretManagerList getSecretManager();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList">CloudbuildTriggerBuildAvailableSecretsSecretManagerList</a>

---

##### `secretManagerInput`<sup>Optional</sup> <a name="secretManagerInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManagerInput"></a>

```java
public java.lang.Object getSecretManagerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerBuildAvailableSecrets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

---


### CloudbuildTriggerBuildAvailableSecretsSecretManagerList <a name="CloudbuildTriggerBuildAvailableSecretsSecretManagerList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList;

new CloudbuildTriggerBuildAvailableSecretsSecretManagerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.get"></a>

```java
public CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>>

---


### CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference <a name="CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference;

new CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.envInput">envInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionNameInput">versionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env">env</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.envInput"></a>

```java
public java.lang.String getEnvInput();
```

- *Type:* java.lang.String

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionNameInput"></a>

```java
public java.lang.String getVersionNameInput();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env"></a>

```java
public java.lang.String getEnv();
```

- *Type:* java.lang.String

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager">CloudbuildTriggerBuildAvailableSecretsSecretManager</a>

---


### CloudbuildTriggerBuildOptionsOutputReference <a name="CloudbuildTriggerBuildOptionsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildOptionsOutputReference;

new CloudbuildTriggerBuildOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDynamicSubstitutions">resetDynamicSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogStreamingOption">resetLogStreamingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetRequestedVerifyOption">resetRequestedVerifyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSecretEnv">resetSecretEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSourceProvenanceHash">resetSourceProvenanceHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSubstitutionOption">resetSubstitutionOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetWorkerPool">resetWorkerPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.putVolumes"></a>

```java
public void putVolumes(IResolvable OR java.util.List<CloudbuildTriggerBuildOptionsVolumes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.putVolumes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>>

---

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetDynamicSubstitutions` <a name="resetDynamicSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDynamicSubstitutions"></a>

```java
public void resetDynamicSubstitutions()
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogging"></a>

```java
public void resetLogging()
```

##### `resetLogStreamingOption` <a name="resetLogStreamingOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogStreamingOption"></a>

```java
public void resetLogStreamingOption()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetRequestedVerifyOption` <a name="resetRequestedVerifyOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetRequestedVerifyOption"></a>

```java
public void resetRequestedVerifyOption()
```

##### `resetSecretEnv` <a name="resetSecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSecretEnv"></a>

```java
public void resetSecretEnv()
```

##### `resetSourceProvenanceHash` <a name="resetSourceProvenanceHash" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSourceProvenanceHash"></a>

```java
public void resetSourceProvenanceHash()
```

##### `resetSubstitutionOption` <a name="resetSubstitutionOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSubstitutionOption"></a>

```java
public void resetSubstitutionOption()
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetVolumes"></a>

```java
public void resetVolumes()
```

##### `resetWorkerPool` <a name="resetWorkerPool" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetWorkerPool"></a>

```java
public void resetWorkerPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList">CloudbuildTriggerBuildOptionsVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutionsInput">dynamicSubstitutionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.envInput">envInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.loggingInput">loggingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOptionInput">logStreamingOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOptionInput">requestedVerifyOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnvInput">secretEnvInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHashInput">sourceProvenanceHashInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOptionInput">substitutionOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumesInput">volumesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPoolInput">workerPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions">dynamicSubstitutions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.env">env</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logging">logging</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption">logStreamingOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption">requestedVerifyOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnv">secretEnv</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash">sourceProvenanceHash</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption">substitutionOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPool">workerPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumes"></a>

```java
public CloudbuildTriggerBuildOptionsVolumesList getVolumes();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList">CloudbuildTriggerBuildOptionsVolumesList</a>

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `dynamicSubstitutionsInput`<sup>Optional</sup> <a name="dynamicSubstitutionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutionsInput"></a>

```java
public java.lang.Object getDynamicSubstitutionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.envInput"></a>

```java
public java.util.List<java.lang.String> getEnvInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.loggingInput"></a>

```java
public java.lang.String getLoggingInput();
```

- *Type:* java.lang.String

---

##### `logStreamingOptionInput`<sup>Optional</sup> <a name="logStreamingOptionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOptionInput"></a>

```java
public java.lang.String getLogStreamingOptionInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `requestedVerifyOptionInput`<sup>Optional</sup> <a name="requestedVerifyOptionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOptionInput"></a>

```java
public java.lang.String getRequestedVerifyOptionInput();
```

- *Type:* java.lang.String

---

##### `secretEnvInput`<sup>Optional</sup> <a name="secretEnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnvInput"></a>

```java
public java.util.List<java.lang.String> getSecretEnvInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceProvenanceHashInput`<sup>Optional</sup> <a name="sourceProvenanceHashInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHashInput"></a>

```java
public java.util.List<java.lang.String> getSourceProvenanceHashInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `substitutionOptionInput`<sup>Optional</sup> <a name="substitutionOptionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOptionInput"></a>

```java
public java.lang.String getSubstitutionOptionInput();
```

- *Type:* java.lang.String

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumesInput"></a>

```java
public java.lang.Object getVolumesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>>

---

##### `workerPoolInput`<sup>Optional</sup> <a name="workerPoolInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPoolInput"></a>

```java
public java.lang.String getWorkerPoolInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `dynamicSubstitutions`<sup>Required</sup> <a name="dynamicSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions"></a>

```java
public java.lang.Object getDynamicSubstitutions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.env"></a>

```java
public java.util.List<java.lang.String> getEnv();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logging"></a>

```java
public java.lang.String getLogging();
```

- *Type:* java.lang.String

---

##### `logStreamingOption`<sup>Required</sup> <a name="logStreamingOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption"></a>

```java
public java.lang.String getLogStreamingOption();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `requestedVerifyOption`<sup>Required</sup> <a name="requestedVerifyOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption"></a>

```java
public java.lang.String getRequestedVerifyOption();
```

- *Type:* java.lang.String

---

##### `secretEnv`<sup>Required</sup> <a name="secretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnv"></a>

```java
public java.util.List<java.lang.String> getSecretEnv();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceProvenanceHash`<sup>Required</sup> <a name="sourceProvenanceHash" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash"></a>

```java
public java.util.List<java.lang.String> getSourceProvenanceHash();
```

- *Type:* java.util.List<java.lang.String>

---

##### `substitutionOption`<sup>Required</sup> <a name="substitutionOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption"></a>

```java
public java.lang.String getSubstitutionOption();
```

- *Type:* java.lang.String

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPool"></a>

```java
public java.lang.String getWorkerPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerBuildOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

---


### CloudbuildTriggerBuildOptionsVolumesList <a name="CloudbuildTriggerBuildOptionsVolumesList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildOptionsVolumesList;

new CloudbuildTriggerBuildOptionsVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.get"></a>

```java
public CloudbuildTriggerBuildOptionsVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>>

---


### CloudbuildTriggerBuildOptionsVolumesOutputReference <a name="CloudbuildTriggerBuildOptionsVolumesOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildOptionsVolumesOutputReference;

new CloudbuildTriggerBuildOptionsVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes">CloudbuildTriggerBuildOptionsVolumes</a>

---


### CloudbuildTriggerBuildOutputReference <a name="CloudbuildTriggerBuildOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildOutputReference;

new CloudbuildTriggerBuildOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putArtifacts">putArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putAvailableSecrets">putAvailableSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putStep">putStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetArtifacts">resetArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetAvailableSecrets">resetAvailableSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetImages">resetImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetLogsBucket">resetLogsBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetQueueTtl">resetQueueTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSubstitutions">resetSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putArtifacts` <a name="putArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putArtifacts"></a>

```java
public void putArtifacts(CloudbuildTriggerBuildArtifacts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putArtifacts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

---

##### `putAvailableSecrets` <a name="putAvailableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putAvailableSecrets"></a>

```java
public void putAvailableSecrets(CloudbuildTriggerBuildAvailableSecrets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putAvailableSecrets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions"></a>

```java
public void putOptions(CloudbuildTriggerBuildOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSecret"></a>

```java
public void putSecret(IResolvable OR java.util.List<CloudbuildTriggerBuildSecret> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSecret.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSource"></a>

```java
public void putSource(CloudbuildTriggerBuildSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

---

##### `putStep` <a name="putStep" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putStep"></a>

```java
public void putStep(IResolvable OR java.util.List<CloudbuildTriggerBuildStep> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putStep.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>>

---

##### `resetArtifacts` <a name="resetArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetArtifacts"></a>

```java
public void resetArtifacts()
```

##### `resetAvailableSecrets` <a name="resetAvailableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetAvailableSecrets"></a>

```java
public void resetAvailableSecrets()
```

##### `resetImages` <a name="resetImages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetImages"></a>

```java
public void resetImages()
```

##### `resetLogsBucket` <a name="resetLogsBucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetLogsBucket"></a>

```java
public void resetLogsBucket()
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetQueueTtl` <a name="resetQueueTtl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetQueueTtl"></a>

```java
public void resetQueueTtl()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSecret"></a>

```java
public void resetSecret()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetSubstitutions` <a name="resetSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSubstitutions"></a>

```java
public void resetSubstitutions()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifacts">artifacts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference">CloudbuildTriggerBuildArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecrets">availableSecrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference">CloudbuildTriggerBuildAvailableSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.options">options</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference">CloudbuildTriggerBuildOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList">CloudbuildTriggerBuildSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference">CloudbuildTriggerBuildSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.step">step</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList">CloudbuildTriggerBuildStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifactsInput">artifactsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecretsInput">availableSecretsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.imagesInput">imagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucketInput">logsBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtlInput">queueTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secretInput">secretInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.stepInput">stepInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutionsInput">substitutionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.images">images</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucket">logsBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtl">queueTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutions">substitutions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifacts"></a>

```java
public CloudbuildTriggerBuildArtifactsOutputReference getArtifacts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference">CloudbuildTriggerBuildArtifactsOutputReference</a>

---

##### `availableSecrets`<sup>Required</sup> <a name="availableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecrets"></a>

```java
public CloudbuildTriggerBuildAvailableSecretsOutputReference getAvailableSecrets();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference">CloudbuildTriggerBuildAvailableSecretsOutputReference</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.options"></a>

```java
public CloudbuildTriggerBuildOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference">CloudbuildTriggerBuildOptionsOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secret"></a>

```java
public CloudbuildTriggerBuildSecretList getSecret();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList">CloudbuildTriggerBuildSecretList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.source"></a>

```java
public CloudbuildTriggerBuildSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference">CloudbuildTriggerBuildSourceOutputReference</a>

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.step"></a>

```java
public CloudbuildTriggerBuildStepList getStep();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList">CloudbuildTriggerBuildStepList</a>

---

##### `artifactsInput`<sup>Optional</sup> <a name="artifactsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifactsInput"></a>

```java
public CloudbuildTriggerBuildArtifacts getArtifactsInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

---

##### `availableSecretsInput`<sup>Optional</sup> <a name="availableSecretsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecretsInput"></a>

```java
public CloudbuildTriggerBuildAvailableSecrets getAvailableSecretsInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

---

##### `imagesInput`<sup>Optional</sup> <a name="imagesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.imagesInput"></a>

```java
public java.util.List<java.lang.String> getImagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logsBucketInput`<sup>Optional</sup> <a name="logsBucketInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucketInput"></a>

```java
public java.lang.String getLogsBucketInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.optionsInput"></a>

```java
public CloudbuildTriggerBuildOptions getOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

---

##### `queueTtlInput`<sup>Optional</sup> <a name="queueTtlInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtlInput"></a>

```java
public java.lang.String getQueueTtlInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secretInput"></a>

```java
public java.lang.Object getSecretInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.sourceInput"></a>

```java
public CloudbuildTriggerBuildSource getSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

---

##### `stepInput`<sup>Optional</sup> <a name="stepInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.stepInput"></a>

```java
public java.lang.Object getStepInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>>

---

##### `substitutionsInput`<sup>Optional</sup> <a name="substitutionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSubstitutionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `images`<sup>Required</sup> <a name="images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.images"></a>

```java
public java.util.List<java.lang.String> getImages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logsBucket`<sup>Required</sup> <a name="logsBucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucket"></a>

```java
public java.lang.String getLogsBucket();
```

- *Type:* java.lang.String

---

##### `queueTtl`<sup>Required</sup> <a name="queueTtl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtl"></a>

```java
public java.lang.String getQueueTtl();
```

- *Type:* java.lang.String

---

##### `substitutions`<sup>Required</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSubstitutions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerBuild getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

---


### CloudbuildTriggerBuildSecretList <a name="CloudbuildTriggerBuildSecretList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildSecretList;

new CloudbuildTriggerBuildSecretList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.get"></a>

```java
public CloudbuildTriggerBuildSecretOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>>

---


### CloudbuildTriggerBuildSecretOutputReference <a name="CloudbuildTriggerBuildSecretOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildSecretOutputReference;

new CloudbuildTriggerBuildSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resetSecretEnv">resetSecretEnv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretEnv` <a name="resetSecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resetSecretEnv"></a>

```java
public void resetSecretEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnvInput">secretEnvInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnv">secretEnv</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `secretEnvInput`<sup>Optional</sup> <a name="secretEnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnvInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecretEnvInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `secretEnv`<sup>Required</sup> <a name="secretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnv"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecretEnv();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret">CloudbuildTriggerBuildSecret</a>

---


### CloudbuildTriggerBuildSourceOutputReference <a name="CloudbuildTriggerBuildSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildSourceOutputReference;

new CloudbuildTriggerBuildSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource">putRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putStorageSource">putStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetRepoSource">resetRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetStorageSource">resetStorageSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRepoSource` <a name="putRepoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource"></a>

```java
public void putRepoSource(CloudbuildTriggerBuildSourceRepoSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

---

##### `putStorageSource` <a name="putStorageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putStorageSource"></a>

```java
public void putStorageSource(CloudbuildTriggerBuildSourceStorageSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putStorageSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

---

##### `resetRepoSource` <a name="resetRepoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetRepoSource"></a>

```java
public void resetRepoSource()
```

##### `resetStorageSource` <a name="resetStorageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetStorageSource"></a>

```java
public void resetStorageSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSource">repoSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference">CloudbuildTriggerBuildSourceRepoSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSource">storageSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference">CloudbuildTriggerBuildSourceStorageSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSourceInput">repoSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSourceInput">storageSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repoSource`<sup>Required</sup> <a name="repoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSource"></a>

```java
public CloudbuildTriggerBuildSourceRepoSourceOutputReference getRepoSource();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference">CloudbuildTriggerBuildSourceRepoSourceOutputReference</a>

---

##### `storageSource`<sup>Required</sup> <a name="storageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSource"></a>

```java
public CloudbuildTriggerBuildSourceStorageSourceOutputReference getStorageSource();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference">CloudbuildTriggerBuildSourceStorageSourceOutputReference</a>

---

##### `repoSourceInput`<sup>Optional</sup> <a name="repoSourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSourceInput"></a>

```java
public CloudbuildTriggerBuildSourceRepoSource getRepoSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

---

##### `storageSourceInput`<sup>Optional</sup> <a name="storageSourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSourceInput"></a>

```java
public CloudbuildTriggerBuildSourceStorageSource getStorageSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerBuildSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

---


### CloudbuildTriggerBuildSourceRepoSourceOutputReference <a name="CloudbuildTriggerBuildSourceRepoSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference;

new CloudbuildTriggerBuildSourceRepoSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetBranchName">resetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetCommitSha">resetCommitSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetDir">resetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetInvertRegex">resetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetSubstitutions">resetSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetTagName">resetTagName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchName` <a name="resetBranchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetBranchName"></a>

```java
public void resetBranchName()
```

##### `resetCommitSha` <a name="resetCommitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetCommitSha"></a>

```java
public void resetCommitSha()
```

##### `resetDir` <a name="resetDir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetDir"></a>

```java
public void resetDir()
```

##### `resetInvertRegex` <a name="resetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetInvertRegex"></a>

```java
public void resetInvertRegex()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetSubstitutions` <a name="resetSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetSubstitutions"></a>

```java
public void resetSubstitutions()
```

##### `resetTagName` <a name="resetTagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetTagName"></a>

```java
public void resetTagName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchNameInput">branchNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitShaInput">commitShaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dirInput">dirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegexInput">invertRegexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoNameInput">repoNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutionsInput">substitutionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagNameInput">tagNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir">dir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName">repoName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions">substitutions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName">tagName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchNameInput"></a>

```java
public java.lang.String getBranchNameInput();
```

- *Type:* java.lang.String

---

##### `commitShaInput`<sup>Optional</sup> <a name="commitShaInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitShaInput"></a>

```java
public java.lang.String getCommitShaInput();
```

- *Type:* java.lang.String

---

##### `dirInput`<sup>Optional</sup> <a name="dirInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dirInput"></a>

```java
public java.lang.String getDirInput();
```

- *Type:* java.lang.String

---

##### `invertRegexInput`<sup>Optional</sup> <a name="invertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegexInput"></a>

```java
public java.lang.Object getInvertRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `repoNameInput`<sup>Optional</sup> <a name="repoNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoNameInput"></a>

```java
public java.lang.String getRepoNameInput();
```

- *Type:* java.lang.String

---

##### `substitutionsInput`<sup>Optional</sup> <a name="substitutionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSubstitutionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagNameInput`<sup>Optional</sup> <a name="tagNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagNameInput"></a>

```java
public java.lang.String getTagNameInput();
```

- *Type:* java.lang.String

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName"></a>

```java
public java.lang.String getRepoName();
```

- *Type:* java.lang.String

---

##### `substitutions`<sup>Required</sup> <a name="substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSubstitutions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerBuildSourceRepoSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

---


### CloudbuildTriggerBuildSourceStorageSourceOutputReference <a name="CloudbuildTriggerBuildSourceStorageSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference;

new CloudbuildTriggerBuildSourceStorageSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resetGeneration">resetGeneration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGeneration` <a name="resetGeneration" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resetGeneration"></a>

```java
public void resetGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generationInput">generationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation">generation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `generationInput`<sup>Optional</sup> <a name="generationInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generationInput"></a>

```java
public java.lang.String getGenerationInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerBuildSourceStorageSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

---


### CloudbuildTriggerBuildStepList <a name="CloudbuildTriggerBuildStepList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildStepList;

new CloudbuildTriggerBuildStepList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.get"></a>

```java
public CloudbuildTriggerBuildStepOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>>

---


### CloudbuildTriggerBuildStepOutputReference <a name="CloudbuildTriggerBuildStepOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildStepOutputReference;

new CloudbuildTriggerBuildStepOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetAllowExitCodes">resetAllowExitCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetAllowFailure">resetAllowFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetDir">resetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEntrypoint">resetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetScript">resetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetSecretEnv">resetSecretEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTiming">resetTiming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetWaitFor">resetWaitFor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.putVolumes"></a>

```java
public void putVolumes(IResolvable OR java.util.List<CloudbuildTriggerBuildStepVolumes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.putVolumes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>>

---

##### `resetAllowExitCodes` <a name="resetAllowExitCodes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetAllowExitCodes"></a>

```java
public void resetAllowExitCodes()
```

##### `resetAllowFailure` <a name="resetAllowFailure" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetAllowFailure"></a>

```java
public void resetAllowFailure()
```

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetDir` <a name="resetDir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetDir"></a>

```java
public void resetDir()
```

##### `resetEntrypoint` <a name="resetEntrypoint" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEntrypoint"></a>

```java
public void resetEntrypoint()
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetScript` <a name="resetScript" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetScript"></a>

```java
public void resetScript()
```

##### `resetSecretEnv` <a name="resetSecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetSecretEnv"></a>

```java
public void resetSecretEnv()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetTiming` <a name="resetTiming" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTiming"></a>

```java
public void resetTiming()
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetVolumes"></a>

```java
public void resetVolumes()
```

##### `resetWaitFor` <a name="resetWaitFor" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetWaitFor"></a>

```java
public void resetWaitFor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList">CloudbuildTriggerBuildStepVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowExitCodesInput">allowExitCodesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowFailureInput">allowFailureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dirInput">dirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypointInput">entrypointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.envInput">envInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.scriptInput">scriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnvInput">secretEnvInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timingInput">timingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumesInput">volumesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitForInput">waitForInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowExitCodes">allowExitCodes</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowFailure">allowFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dir">dir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypoint">entrypoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.env">env</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.script">script</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnv">secretEnv</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timing">timing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitFor">waitFor</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumes"></a>

```java
public CloudbuildTriggerBuildStepVolumesList getVolumes();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList">CloudbuildTriggerBuildStepVolumesList</a>

---

##### `allowExitCodesInput`<sup>Optional</sup> <a name="allowExitCodesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowExitCodesInput"></a>

```java
public java.util.List<java.lang.Number> getAllowExitCodesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `allowFailureInput`<sup>Optional</sup> <a name="allowFailureInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowFailureInput"></a>

```java
public java.lang.Object getAllowFailureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dirInput`<sup>Optional</sup> <a name="dirInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dirInput"></a>

```java
public java.lang.String getDirInput();
```

- *Type:* java.lang.String

---

##### `entrypointInput`<sup>Optional</sup> <a name="entrypointInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypointInput"></a>

```java
public java.lang.String getEntrypointInput();
```

- *Type:* java.lang.String

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.envInput"></a>

```java
public java.util.List<java.lang.String> getEnvInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.scriptInput"></a>

```java
public java.lang.String getScriptInput();
```

- *Type:* java.lang.String

---

##### `secretEnvInput`<sup>Optional</sup> <a name="secretEnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnvInput"></a>

```java
public java.util.List<java.lang.String> getSecretEnvInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `timingInput`<sup>Optional</sup> <a name="timingInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timingInput"></a>

```java
public java.lang.String getTimingInput();
```

- *Type:* java.lang.String

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumesInput"></a>

```java
public java.lang.Object getVolumesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>>

---

##### `waitForInput`<sup>Optional</sup> <a name="waitForInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitForInput"></a>

```java
public java.util.List<java.lang.String> getWaitForInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowExitCodes`<sup>Required</sup> <a name="allowExitCodes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowExitCodes"></a>

```java
public java.util.List<java.lang.Number> getAllowExitCodes();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `allowFailure`<sup>Required</sup> <a name="allowFailure" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowFailure"></a>

```java
public java.lang.Object getAllowFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypoint"></a>

```java
public java.lang.String getEntrypoint();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.env"></a>

```java
public java.util.List<java.lang.String> getEnv();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

---

##### `secretEnv`<sup>Required</sup> <a name="secretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnv"></a>

```java
public java.util.List<java.lang.String> getSecretEnv();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `timing`<sup>Required</sup> <a name="timing" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timing"></a>

```java
public java.lang.String getTiming();
```

- *Type:* java.lang.String

---

##### `waitFor`<sup>Required</sup> <a name="waitFor" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitFor"></a>

```java
public java.util.List<java.lang.String> getWaitFor();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep">CloudbuildTriggerBuildStep</a>

---


### CloudbuildTriggerBuildStepVolumesList <a name="CloudbuildTriggerBuildStepVolumesList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildStepVolumesList;

new CloudbuildTriggerBuildStepVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.get"></a>

```java
public CloudbuildTriggerBuildStepVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>>

---


### CloudbuildTriggerBuildStepVolumesOutputReference <a name="CloudbuildTriggerBuildStepVolumesOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerBuildStepVolumesOutputReference;

new CloudbuildTriggerBuildStepVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes">CloudbuildTriggerBuildStepVolumes</a>

---


### CloudbuildTriggerGitFileSourceOutputReference <a name="CloudbuildTriggerGitFileSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerGitFileSourceOutputReference;

new CloudbuildTriggerGitFileSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetBitbucketServerConfig">resetBitbucketServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetGithubEnterpriseConfig">resetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetRevision">resetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBitbucketServerConfig` <a name="resetBitbucketServerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetBitbucketServerConfig"></a>

```java
public void resetBitbucketServerConfig()
```

##### `resetGithubEnterpriseConfig` <a name="resetGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetGithubEnterpriseConfig"></a>

```java
public void resetGithubEnterpriseConfig()
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetRepository"></a>

```java
public void resetRepository()
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetRevision"></a>

```java
public void resetRevision()
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfigInput">bitbucketServerConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfigInput">githubEnterpriseConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoTypeInput">repoTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfig">bitbucketServerConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoType">repoType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bitbucketServerConfigInput`<sup>Optional</sup> <a name="bitbucketServerConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfigInput"></a>

```java
public java.lang.String getBitbucketServerConfigInput();
```

- *Type:* java.lang.String

---

##### `githubEnterpriseConfigInput`<sup>Optional</sup> <a name="githubEnterpriseConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfigInput"></a>

```java
public java.lang.String getGithubEnterpriseConfigInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `repoTypeInput`<sup>Optional</sup> <a name="repoTypeInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoTypeInput"></a>

```java
public java.lang.String getRepoTypeInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `bitbucketServerConfig`<sup>Required</sup> <a name="bitbucketServerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfig"></a>

```java
public java.lang.String getBitbucketServerConfig();
```

- *Type:* java.lang.String

---

##### `githubEnterpriseConfig`<sup>Required</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig"></a>

```java
public java.lang.String getGithubEnterpriseConfig();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `repoType`<sup>Required</sup> <a name="repoType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoType"></a>

```java
public java.lang.String getRepoType();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerGitFileSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

---


### CloudbuildTriggerGithubOutputReference <a name="CloudbuildTriggerGithubOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerGithubOutputReference;

new CloudbuildTriggerGithubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPullRequest">putPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPush">putPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetEnterpriseConfigResourceName">resetEnterpriseConfigResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPullRequest">resetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPush">resetPush</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPullRequest` <a name="putPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPullRequest"></a>

```java
public void putPullRequest(CloudbuildTriggerGithubPullRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

---

##### `putPush` <a name="putPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPush"></a>

```java
public void putPush(CloudbuildTriggerGithubPush value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPush.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

---

##### `resetEnterpriseConfigResourceName` <a name="resetEnterpriseConfigResourceName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetEnterpriseConfigResourceName"></a>

```java
public void resetEnterpriseConfigResourceName()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetPullRequest` <a name="resetPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPullRequest"></a>

```java
public void resetPullRequest()
```

##### `resetPush` <a name="resetPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPush"></a>

```java
public void resetPush()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference">CloudbuildTriggerGithubPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference">CloudbuildTriggerGithubPushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceNameInput">enterpriseConfigResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequestInput">pullRequestInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pushInput">pushInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceName">enterpriseConfigResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequest"></a>

```java
public CloudbuildTriggerGithubPullRequestOutputReference getPullRequest();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference">CloudbuildTriggerGithubPullRequestOutputReference</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.push"></a>

```java
public CloudbuildTriggerGithubPushOutputReference getPush();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference">CloudbuildTriggerGithubPushOutputReference</a>

---

##### `enterpriseConfigResourceNameInput`<sup>Optional</sup> <a name="enterpriseConfigResourceNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceNameInput"></a>

```java
public java.lang.String getEnterpriseConfigResourceNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `pullRequestInput`<sup>Optional</sup> <a name="pullRequestInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequestInput"></a>

```java
public CloudbuildTriggerGithubPullRequest getPullRequestInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

---

##### `pushInput`<sup>Optional</sup> <a name="pushInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pushInput"></a>

```java
public CloudbuildTriggerGithubPush getPushInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

---

##### `enterpriseConfigResourceName`<sup>Required</sup> <a name="enterpriseConfigResourceName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceName"></a>

```java
public java.lang.String getEnterpriseConfigResourceName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerGithub getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

---


### CloudbuildTriggerGithubPullRequestOutputReference <a name="CloudbuildTriggerGithubPullRequestOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerGithubPullRequestOutputReference;

new CloudbuildTriggerGithubPullRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetCommentControl">resetCommentControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetInvertRegex">resetInvertRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommentControl` <a name="resetCommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetCommentControl"></a>

```java
public void resetCommentControl()
```

##### `resetInvertRegex` <a name="resetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetInvertRegex"></a>

```java
public void resetInvertRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControlInput">commentControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegexInput">invertRegexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControl">commentControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `commentControlInput`<sup>Optional</sup> <a name="commentControlInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControlInput"></a>

```java
public java.lang.String getCommentControlInput();
```

- *Type:* java.lang.String

---

##### `invertRegexInput`<sup>Optional</sup> <a name="invertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegexInput"></a>

```java
public java.lang.Object getInvertRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `commentControl`<sup>Required</sup> <a name="commentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControl"></a>

```java
public java.lang.String getCommentControl();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerGithubPullRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

---


### CloudbuildTriggerGithubPushOutputReference <a name="CloudbuildTriggerGithubPushOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerGithubPushOutputReference;

new CloudbuildTriggerGithubPushOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetInvertRegex">resetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetInvertRegex` <a name="resetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetInvertRegex"></a>

```java
public void resetInvertRegex()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetTag"></a>

```java
public void resetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegexInput">invertRegexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `invertRegexInput`<sup>Optional</sup> <a name="invertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegexInput"></a>

```java
public java.lang.Object getInvertRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerGithubPush getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

---


### CloudbuildTriggerPubsubConfigOutputReference <a name="CloudbuildTriggerPubsubConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerPubsubConfigOutputReference;

new CloudbuildTriggerPubsubConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.subscription">subscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.subscription"></a>

```java
public java.lang.String getSubscription();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerPubsubConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

---


### CloudbuildTriggerRepositoryEventConfigOutputReference <a name="CloudbuildTriggerRepositoryEventConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerRepositoryEventConfigOutputReference;

new CloudbuildTriggerRepositoryEventConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.putPullRequest">putPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.putPush">putPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resetPullRequest">resetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resetPush">resetPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPullRequest` <a name="putPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.putPullRequest"></a>

```java
public void putPullRequest(CloudbuildTriggerRepositoryEventConfigPullRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest">CloudbuildTriggerRepositoryEventConfigPullRequest</a>

---

##### `putPush` <a name="putPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.putPush"></a>

```java
public void putPush(CloudbuildTriggerRepositoryEventConfigPush value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.putPush.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush">CloudbuildTriggerRepositoryEventConfigPush</a>

---

##### `resetPullRequest` <a name="resetPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resetPullRequest"></a>

```java
public void resetPullRequest()
```

##### `resetPush` <a name="resetPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resetPush"></a>

```java
public void resetPush()
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resetRepository"></a>

```java
public void resetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference">CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference">CloudbuildTriggerRepositoryEventConfigPushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequestInput">pullRequestInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest">CloudbuildTriggerRepositoryEventConfigPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.pushInput">pushInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush">CloudbuildTriggerRepositoryEventConfigPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequest"></a>

```java
public CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference getPullRequest();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference">CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.push"></a>

```java
public CloudbuildTriggerRepositoryEventConfigPushOutputReference getPush();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference">CloudbuildTriggerRepositoryEventConfigPushOutputReference</a>

---

##### `pullRequestInput`<sup>Optional</sup> <a name="pullRequestInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequestInput"></a>

```java
public CloudbuildTriggerRepositoryEventConfigPullRequest getPullRequestInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest">CloudbuildTriggerRepositoryEventConfigPullRequest</a>

---

##### `pushInput`<sup>Optional</sup> <a name="pushInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.pushInput"></a>

```java
public CloudbuildTriggerRepositoryEventConfigPush getPushInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush">CloudbuildTriggerRepositoryEventConfigPush</a>

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerRepositoryEventConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a>

---


### CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference <a name="CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference;

new CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetCommentControl">resetCommentControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetInvertRegex">resetInvertRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetCommentControl` <a name="resetCommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetCommentControl"></a>

```java
public void resetCommentControl()
```

##### `resetInvertRegex` <a name="resetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetInvertRegex"></a>

```java
public void resetInvertRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControlInput">commentControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegexInput">invertRegexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControl">commentControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest">CloudbuildTriggerRepositoryEventConfigPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `commentControlInput`<sup>Optional</sup> <a name="commentControlInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControlInput"></a>

```java
public java.lang.String getCommentControlInput();
```

- *Type:* java.lang.String

---

##### `invertRegexInput`<sup>Optional</sup> <a name="invertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegexInput"></a>

```java
public java.lang.Object getInvertRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `commentControl`<sup>Required</sup> <a name="commentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControl"></a>

```java
public java.lang.String getCommentControl();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerRepositoryEventConfigPullRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest">CloudbuildTriggerRepositoryEventConfigPullRequest</a>

---


### CloudbuildTriggerRepositoryEventConfigPushOutputReference <a name="CloudbuildTriggerRepositoryEventConfigPushOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference;

new CloudbuildTriggerRepositoryEventConfigPushOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resetInvertRegex">resetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetInvertRegex` <a name="resetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resetInvertRegex"></a>

```java
public void resetInvertRegex()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resetTag"></a>

```java
public void resetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegexInput">invertRegexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush">CloudbuildTriggerRepositoryEventConfigPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `invertRegexInput`<sup>Optional</sup> <a name="invertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegexInput"></a>

```java
public java.lang.Object getInvertRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerRepositoryEventConfigPush getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush">CloudbuildTriggerRepositoryEventConfigPush</a>

---


### CloudbuildTriggerSourceToBuildOutputReference <a name="CloudbuildTriggerSourceToBuildOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerSourceToBuildOutputReference;

new CloudbuildTriggerSourceToBuildOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetBitbucketServerConfig">resetBitbucketServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetGithubEnterpriseConfig">resetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBitbucketServerConfig` <a name="resetBitbucketServerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetBitbucketServerConfig"></a>

```java
public void resetBitbucketServerConfig()
```

##### `resetGithubEnterpriseConfig` <a name="resetGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetGithubEnterpriseConfig"></a>

```java
public void resetGithubEnterpriseConfig()
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetRepository"></a>

```java
public void resetRepository()
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfigInput">bitbucketServerConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfigInput">githubEnterpriseConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.refInput">refInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoTypeInput">repoTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfig">bitbucketServerConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoType">repoType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bitbucketServerConfigInput`<sup>Optional</sup> <a name="bitbucketServerConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfigInput"></a>

```java
public java.lang.String getBitbucketServerConfigInput();
```

- *Type:* java.lang.String

---

##### `githubEnterpriseConfigInput`<sup>Optional</sup> <a name="githubEnterpriseConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfigInput"></a>

```java
public java.lang.String getGithubEnterpriseConfigInput();
```

- *Type:* java.lang.String

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.refInput"></a>

```java
public java.lang.String getRefInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `repoTypeInput`<sup>Optional</sup> <a name="repoTypeInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoTypeInput"></a>

```java
public java.lang.String getRepoTypeInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `bitbucketServerConfig`<sup>Required</sup> <a name="bitbucketServerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfig"></a>

```java
public java.lang.String getBitbucketServerConfig();
```

- *Type:* java.lang.String

---

##### `githubEnterpriseConfig`<sup>Required</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig"></a>

```java
public java.lang.String getGithubEnterpriseConfig();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `repoType`<sup>Required</sup> <a name="repoType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoType"></a>

```java
public java.lang.String getRepoType();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerSourceToBuild getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

---


### CloudbuildTriggerTimeoutsOutputReference <a name="CloudbuildTriggerTimeoutsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerTimeoutsOutputReference;

new CloudbuildTriggerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>

---


### CloudbuildTriggerTriggerTemplateOutputReference <a name="CloudbuildTriggerTriggerTemplateOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerTriggerTemplateOutputReference;

new CloudbuildTriggerTriggerTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetBranchName">resetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetCommitSha">resetCommitSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetDir">resetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetInvertRegex">resetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetRepoName">resetRepoName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetTagName">resetTagName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchName` <a name="resetBranchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetBranchName"></a>

```java
public void resetBranchName()
```

##### `resetCommitSha` <a name="resetCommitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetCommitSha"></a>

```java
public void resetCommitSha()
```

##### `resetDir` <a name="resetDir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetDir"></a>

```java
public void resetDir()
```

##### `resetInvertRegex` <a name="resetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetInvertRegex"></a>

```java
public void resetInvertRegex()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetRepoName` <a name="resetRepoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetRepoName"></a>

```java
public void resetRepoName()
```

##### `resetTagName` <a name="resetTagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetTagName"></a>

```java
public void resetTagName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchNameInput">branchNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitShaInput">commitShaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dirInput">dirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegexInput">invertRegexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoNameInput">repoNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagNameInput">tagNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dir">dir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoName">repoName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagName">tagName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchNameInput"></a>

```java
public java.lang.String getBranchNameInput();
```

- *Type:* java.lang.String

---

##### `commitShaInput`<sup>Optional</sup> <a name="commitShaInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitShaInput"></a>

```java
public java.lang.String getCommitShaInput();
```

- *Type:* java.lang.String

---

##### `dirInput`<sup>Optional</sup> <a name="dirInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dirInput"></a>

```java
public java.lang.String getDirInput();
```

- *Type:* java.lang.String

---

##### `invertRegexInput`<sup>Optional</sup> <a name="invertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegexInput"></a>

```java
public java.lang.Object getInvertRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `repoNameInput`<sup>Optional</sup> <a name="repoNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoNameInput"></a>

```java
public java.lang.String getRepoNameInput();
```

- *Type:* java.lang.String

---

##### `tagNameInput`<sup>Optional</sup> <a name="tagNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagNameInput"></a>

```java
public java.lang.String getTagNameInput();
```

- *Type:* java.lang.String

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoName"></a>

```java
public java.lang.String getRepoName();
```

- *Type:* java.lang.String

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerTriggerTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

---


### CloudbuildTriggerWebhookConfigOutputReference <a name="CloudbuildTriggerWebhookConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudbuild_trigger.CloudbuildTriggerWebhookConfigOutputReference;

new CloudbuildTriggerWebhookConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.internalValue"></a>

```java
public CloudbuildTriggerWebhookConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

---



